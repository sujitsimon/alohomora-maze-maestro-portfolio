
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize canvas size
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Maze parameters
    const cellSize = 30;
    const cols = Math.ceil(canvas.width / cellSize);
    const rows = Math.ceil(canvas.height / cellSize);
    
    // Mouse parameters
    const mouse = {
      x: cellSize,
      y: cellSize,
      size: 8,
      color: '#7C3AED',
      trail: [] as {x: number, y: number}[],
      maxTrail: 15,
    };

    // Create maze grid
    const grid: {visited: boolean, walls: boolean[]}[][] = [];
    for (let y = 0; y < rows; y++) {
      const row = [];
      for (let x = 0; x < cols; x++) {
        row.push({
          visited: false,
          walls: [true, true, true, true], // top, right, bottom, left
        });
      }
      grid.push(row);
    }

    // Generate maze with depth-first search algorithm
    const stack: {x: number, y: number}[] = [];
    let current = {x: 0, y: 0};
    grid[current.y][current.x].visited = true;
    stack.push(current);

    const removeWalls = (a: {x: number, y: number}, b: {x: number, y: number}) => {
      const x = a.x - b.x;
      if (x === 1) {
        grid[a.y][a.x].walls[3] = false;
        grid[b.y][b.x].walls[1] = false;
      } else if (x === -1) {
        grid[a.y][a.x].walls[1] = false;
        grid[b.y][b.x].walls[3] = false;
      }

      const y = a.y - b.y;
      if (y === 1) {
        grid[a.y][a.x].walls[0] = false;
        grid[b.y][b.x].walls[2] = false;
      } else if (y === -1) {
        grid[a.y][a.x].walls[2] = false;
        grid[b.y][b.x].walls[0] = false;
      }
    };

    // Generate the maze structure
    while (stack.length > 0) {
      current = stack[stack.length - 1];
      
      const neighbors = [];
      const {x, y} = current;
      
      // Check neighboring cells
      if (y > 0 && !grid[y-1][x].visited) neighbors.push({x, y: y-1});
      if (x < cols-1 && !grid[y][x+1].visited) neighbors.push({x: x+1, y});
      if (y < rows-1 && !grid[y+1][x].visited) neighbors.push({x, y: y+1});
      if (x > 0 && !grid[y][x-1].visited) neighbors.push({x: x-1, y});
      
      if (neighbors.length > 0) {
        // Choose random neighbor
        const next = neighbors[Math.floor(Math.random() * neighbors.length)];
        grid[next.y][next.x].visited = true;
        
        // Remove walls between current and next cell
        removeWalls(current, next);
        
        // Add next cell to stack
        stack.push(next);
      } else {
        // Backtrack if no unvisited neighbors
        stack.pop();
      }
    }

    // Reset visited flags for path finding
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        grid[y][x].visited = false;
      }
    }

    // Path finding with breadth-first search
    const path: {x: number, y: number}[] = [];
    const pathFinder = () => {
      const start = {x: 0, y: 0};
      const end = {x: cols-1, y: rows-1};
      const queue: {x: number, y: number}[] = [start];
      const cameFrom: Map<string, {x: number, y: number}> = new Map();
      
      grid[start.y][start.x].visited = true;
      
      while (queue.length > 0) {
        const current = queue.shift()!;
        
        if (current.x === end.x && current.y === end.y) {
          // Reconstruct path
          let curr = end;
          while (curr.x !== start.x || curr.y !== start.y) {
            path.unshift(curr);
            curr = cameFrom.get(`${curr.x},${curr.y}`)!;
          }
          path.unshift(start);
          break;
        }
        
        // Check all four directions
        const directions = [
          {x: 0, y: -1, wall: 0}, // up
          {x: 1, y: 0, wall: 1},  // right
          {x: 0, y: 1, wall: 2},  // down
          {x: -1, y: 0, wall: 3}  // left
        ];
        
        for (const dir of directions) {
          const next = {x: current.x + dir.x, y: current.y + dir.y};
          
          // Check bounds and if wall exists
          if (next.x >= 0 && next.x < cols && next.y >= 0 && next.y < rows && 
              !grid[current.y][current.x].walls[dir.wall] && 
              !grid[next.y][next.x].visited) {
            grid[next.y][next.x].visited = true;
            queue.push(next);
            cameFrom.set(`${next.x},${next.y}`, current);
          }
        }
      }
    };
    
    pathFinder();

    // Draw the maze
    const drawMaze = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set up transparency and color
      ctx.globalAlpha = 0.05;
      ctx.strokeStyle = '#0EA5E9';
      ctx.lineWidth = 1;
      
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const cell = grid[y][x];
          
          // Draw walls
          if (cell.walls[0]) {
            ctx.beginPath();
            ctx.moveTo(x * cellSize, y * cellSize);
            ctx.lineTo((x + 1) * cellSize, y * cellSize);
            ctx.stroke();
          }
          if (cell.walls[1]) {
            ctx.beginPath();
            ctx.moveTo((x + 1) * cellSize, y * cellSize);
            ctx.lineTo((x + 1) * cellSize, (y + 1) * cellSize);
            ctx.stroke();
          }
          if (cell.walls[2]) {
            ctx.beginPath();
            ctx.moveTo(x * cellSize, (y + 1) * cellSize);
            ctx.lineTo((x + 1) * cellSize, (y + 1) * cellSize);
            ctx.stroke();
          }
          if (cell.walls[3]) {
            ctx.beginPath();
            ctx.moveTo(x * cellSize, y * cellSize);
            ctx.lineTo(x * cellSize, (y + 1) * cellSize);
            ctx.stroke();
          }
        }
      }

      // Reset transparency for the mouse
      ctx.globalAlpha = 1;
    };

    // Move the mouse along the path
    let pathIndex = 0;
    const moveMouse = () => {
      if (path.length > 0 && pathIndex < path.length) {
        const target = path[pathIndex];
        mouse.x = target.x * cellSize + cellSize / 2;
        mouse.y = target.y * cellSize + cellSize / 2;
        
        // Add current position to trail
        mouse.trail.push({x: mouse.x, y: mouse.y});
        if (mouse.trail.length > mouse.maxTrail) {
          mouse.trail.shift();
        }
        
        pathIndex++;
        if (pathIndex >= path.length) {
          // Reset when reaching the end
          setTimeout(() => {
            pathIndex = 0;
            mouse.trail = [];
          }, 2000);
        }
      }
    };

    // Draw the mouse
    const drawMouse = () => {
      // Draw trail
      ctx.globalAlpha = 0.3;
      for (let i = 0; i < mouse.trail.length; i++) {
        const pos = mouse.trail[i];
        const alpha = i / mouse.trail.length;
        const size = mouse.size * alpha;
        
        ctx.beginPath();
        ctx.fillStyle = mouse.color;
        ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Draw mouse body
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.fillStyle = mouse.color;
      ctx.arc(mouse.x, mouse.y, mouse.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw mouse ears
      ctx.beginPath();
      ctx.arc(mouse.x - mouse.size/1.5, mouse.y - mouse.size/1.5, mouse.size/2, 0, Math.PI * 2);
      ctx.arc(mouse.x + mouse.size/1.5, mouse.y - mouse.size/1.5, mouse.size/2, 0, Math.PI * 2);
      ctx.fill();
    };

    // Animation loop
    let lastTime = 0;
    const moveInterval = 100; // Time in ms between movements
    
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      
      if (deltaTime > moveInterval) {
        lastTime = currentTime;
        moveMouse();
      }
      
      drawMaze();
      drawMouse();
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Maze background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 -z-10 w-full h-full"
      />

      {/* Background elements - simplified from original */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-64 h-64 bg-tech-blue/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-tech-accent/10 rounded-full blur-3xl animate-pulse-soft animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 py-12 md:py-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-tech-blue">Maze</span> Solving <br />
            <span className="text-tech-gray">Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
            Our award-winning micro mouse robot navigates complex mazes with precision and 
            lightning-fast algorithms, setting new standards in robotics competitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-tech-blue hover:bg-tech-darkBlue">
              Watch Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Technical Specs
            </Button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-tech-lightGray rounded-full flex items-center justify-center">
              <div className="w-48 h-48 md:w-60 md:h-60 bg-white rounded-full shadow-lg flex items-center justify-center">
                {/* Micromouse Robot - More detailed design */}
                <div className="w-32 h-24 bg-tech-gray rounded-lg relative">
                  {/* Robot body with more details */}
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    {/* PCB (circuit board) base */}
                    <div className="absolute inset-1 bg-green-700 rounded-lg"></div>
                    
                    {/* Front sensors */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                    </div>
                    
                    {/* Motor and wheels */}
                    <div className="absolute bottom-0 left-3 w-4 h-8 bg-gray-700 rounded"></div>
                    <div className="absolute bottom-1 left-1 w-5 h-5 bg-black rounded-full border-2 border-gray-400"></div>
                    
                    <div className="absolute bottom-0 right-3 w-4 h-8 bg-gray-700 rounded"></div>
                    <div className="absolute bottom-1 right-1 w-5 h-5 bg-black rounded-full border-2 border-gray-400"></div>
                    
                    {/* Microcontroller chip */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-8 bg-black rounded-sm">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-6 bg-gray-800 rounded-sm flex items-center justify-center">
                        <div className="text-green-400 text-[6px] font-mono">MCU</div>
                      </div>
                    </div>
                    
                    {/* Battery pack */}
                    <div className="absolute top-3 right-3 w-6 h-8 bg-blue-900 rounded"></div>
                    
                    {/* LEDs */}
                    <div className="absolute top-3 left-3 w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-5 left-3 w-1 h-1 bg-green-500 rounded-full"></div>
                    
                    {/* Tiny electronic components */}
                    <div className="absolute top-8 left-4 w-2 h-1 bg-gray-800 rounded-sm"></div>
                    <div className="absolute top-10 left-4 w-2 h-1 bg-gray-800 rounded-sm"></div>
                    <div className="absolute top-8 right-4 w-2 h-1 bg-gray-800 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 bg-tech-accent text-white px-4 py-2 rounded-full font-medium">
              v2.5
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
