/*
    snake game implementation
        for those who don't know; snake is a game where you control a snake that moves around the screen eating food that makes it grow longer.
        the goal is to eat as much food as possible without colliding with the wall or yourself.

        this is a simple implementation using canvas.
        it uses a grid system to determine the position of the snake and food that updates every x milliseconds based on the GAME_SPEED constant.
        if you've cloned this repo, please feel free to modify the constants to make it more fun for you (or break the game lol)
        the snake is an array of objects that represent the position of the snake's body.

        to-do:
            - fix the issue where the score increments by 2 instead of 1
            - make the game mobile-friendly
*/


'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type Position = { x: number; y: number };
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

const CANVAS_SIZE = 600;
const GRID_SIZE = 20;
const CELL_SIZE = CANVAS_SIZE / GRID_SIZE;
const INITIAL_SNAKE: Position[] = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 },
];
const GAME_SPEED = 100;

export default function SnakeGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
    const [food, setFood] = useState<Position>({ x: 15, y: 15 });
    const [direction, setDirection] = useState<Direction>('RIGHT');
    const [nextDirection, setNextDirection] = useState<Direction>('RIGHT');
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [isViewportTooSmall, setIsViewportTooSmall] = useState(false);
    const gameLoopRef = useRef<number | undefined>(undefined);
    const lastUpdateRef = useRef<number>(0);

    // check if the viewport is too small
    useEffect(() => {
        const checkViewport = () => {
            setIsViewportTooSmall(window.innerWidth < 650);
        };

        checkViewport();
        window.addEventListener('resize', checkViewport);
        return () => window.removeEventListener('resize', checkViewport);
    }, []);

    // try to place food randomly until it's not on the snake
    const generateFood = useCallback((currentSnake: Position[]): Position => {
        let newFood: Position;
        do {
            newFood = {
                x: Math.floor(Math.random() * GRID_SIZE),
                y: Math.floor(Math.random() * GRID_SIZE),
            };
        } while (
            currentSnake.some((segment) => segment.x === newFood.x && segment.y === newFood.y)
        );
        return newFood;
    }, []);

    // check if the snake has collided with the wall or itself
    const checkCollision = useCallback((head: Position, body: Position[]): boolean => {
        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
            return true;
        }
        return body.some((segment) => segment.x === head.x && segment.y === head.y);
    }, []);

    // core game loop
    const gameLoop = useCallback((timestamp: number) => {
        if (!gameStarted || gameOver) return;

        if (timestamp - lastUpdateRef.current >= GAME_SPEED) {
            lastUpdateRef.current = timestamp;

            setDirection(nextDirection);

            setSnake((prevSnake) => {
                const head = prevSnake[0];
                let newHead: Position;

                // calculate the new head position based on the direction of the snake
                switch (nextDirection) {
                    case 'UP':
                        newHead = { x: head.x, y: head.y - 1 };
                        break;
                    case 'DOWN':
                        newHead = { x: head.x, y: head.y + 1 };
                        break;
                    case 'LEFT':
                        newHead = { x: head.x - 1, y: head.y };
                        break;
                    case 'RIGHT':
                        newHead = { x: head.x + 1, y: head.y };
                        break;
                }

                if (checkCollision(newHead, prevSnake)) {
                    setGameOver(true);
                    setHighScore((prevHigh) => Math.max(prevHigh, score));
                    return prevSnake;
                }

                const newSnake = [newHead, ...prevSnake];

                if (newHead.x === food.x && newHead.y === food.y) {
                    setScore((prev) => prev + 1);
                    setFood(generateFood(newSnake));
                } else {
                    newSnake.pop();
                }

                return newSnake;
            });
        }

        gameLoopRef.current = requestAnimationFrame(gameLoop);
    }, [gameStarted, gameOver, nextDirection, food, score, checkCollision, generateFood]);

    // draw the game on the canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const canvasContext = canvas.getContext('2d');
        if (!canvasContext) return;

        canvasContext.fillStyle = '#1a1a1a';
        canvasContext.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

        canvasContext.strokeStyle = '#2a2a2a';
        canvasContext.lineWidth = 1;
        for (let i = 0; i <= GRID_SIZE; i++) {
            canvasContext.beginPath();
            canvasContext.moveTo(i * CELL_SIZE, 0);
            canvasContext.lineTo(i * CELL_SIZE, CANVAS_SIZE);
            canvasContext.stroke();

            canvasContext.beginPath();
            canvasContext.moveTo(0, i * CELL_SIZE);
            canvasContext.lineTo(CANVAS_SIZE, i * CELL_SIZE);
            canvasContext.stroke();
        }

        canvasContext.fillStyle = '#ffffff';
        canvasContext.fillRect(
            food.x * CELL_SIZE + 2,
            food.y * CELL_SIZE + 2,
            CELL_SIZE - 4,
            CELL_SIZE - 4
        );

        snake.forEach((segment, index) => {
            canvasContext.fillStyle = index === 0 ? '#d0d0d0' : '#888888';
            canvasContext.fillRect(
                segment.x * CELL_SIZE + 1,
                segment.y * CELL_SIZE + 1,
                CELL_SIZE - 2,
                CELL_SIZE - 2
            );
        });
    }, [snake, food]);

    // start the game loop
    useEffect(() => {
        if (gameStarted && !gameOver) {
            lastUpdateRef.current = performance.now();
            gameLoopRef.current = requestAnimationFrame(gameLoop);
        }

        return () => {
            if (gameLoopRef.current) {
                cancelAnimationFrame(gameLoopRef.current);
            }
        };
    }, [gameStarted, gameOver, nextDirection, food, gameLoop]);

    // handle keyboard controls
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (!gameStarted && !gameOver) {
                setGameStarted(true);
            }

            const key = e.key.toLowerCase();

            if (key === 'arrowup' || key === 'w') {
                e.preventDefault();
                setNextDirection((prev) => (direction !== 'DOWN' ? 'UP' : prev));
            } else if (key === 'arrowdown' || key === 's') {
                e.preventDefault();
                setNextDirection((prev) => (direction !== 'UP' ? 'DOWN' : prev));
            } else if (key === 'arrowleft' || key === 'a') {
                e.preventDefault();
                setNextDirection((prev) => (direction !== 'RIGHT' ? 'LEFT' : prev));
            } else if (key === 'arrowright' || key === 'd') {
                e.preventDefault();
                setNextDirection((prev) => (direction !== 'LEFT' ? 'RIGHT' : prev));
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [direction, gameStarted, gameOver]);

    // restart the game
    const restartGame = () => {
        setSnake(INITIAL_SNAKE);
        setFood({ x: 15, y: 15 });
        setDirection('RIGHT');
        setNextDirection('RIGHT');
        setGameOver(false);
        setScore(0);
        setGameStarted(false);
        lastUpdateRef.current = 0;
    };

    return (
        <div className="flex flex-col items-center gap-4">
            {isViewportTooSmall ? (
                <div className="text-center p-8 border-2 border-gray-600 rounded">
                    <p className="text-xl text-red-900 font-bold mb-2">screen too small</p>
                    <p className="text-sm">please use a wider screen to play snake.</p>
                    <p className="text-xs mt-2">minimum width: 650px</p>
                </div>
            ) : (
                <>
                    <div className="flex gap-6 text-xl">
                        <div>
                            score: <span className="font-bold">{score}</span>
                        </div>
                        <div>
                            high score: <span className="font-bold">{highScore}</span>
                        </div>
                    </div>

                    <div className="relative max-w-full">
                        <canvas
                            ref={canvasRef}
                            width={CANVAS_SIZE}
                            height={CANVAS_SIZE}
                            className="border-2 border-gray-600 max-w-full h-auto"
                            style={{ width: '600px', maxWidth: '100%' }}
                        />

                        {!gameStarted && !gameOver && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
                                <div className="text-center text-white">
                                    <p className="text-2xl font-bold mb-2">press any arrow key or WASD to start</p>
                                    <p className="text-sm text-gray-400">use arrow keys or WASD to move</p>
                                </div>
                            </div>
                        )}

                        {gameOver && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80">
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-white mb-4">game over!</p>
                                    <p className="text-xl mb-2 text-white">
                                        score: <span className="text-white font-bold">{score}</span>
                                    </p>
                                    {score === highScore && score > 0 && (
                                        <p className="text-sm text-green-400 mb-4">new high score!</p>
                                    )}
                                    {score < highScore && (
                                        <p className="text-sm text-gray-400 mb-4">high score: {highScore}</p>
                                    )}
                                    <button
                                        onClick={restartGame}
                                        className="px-6 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors mt-2"
                                    >
                                        restart game
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}