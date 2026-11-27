import React from "react";
import tcp from '../assets/images/tcp.png';
import controller from '../assets/images/controller.png';
import floppydisk from '../assets/images/floppy-disk.png';
import hand from '../assets/images/hand.png';
import ODP from '../assets/images/ODP.png';
import hex from '../assets/images/hex.png';
import robotColumns  from '../assets/images/robotColumns.png';
import Chip from '@mui/material/Chip';
import '../assets/styles/Project.scss';

function Project() {

   const labelsFirst = [
        'C#', 'Unity', 'Mirror', 'Shaders', 'GPU Instancing'
    ];
    const labelscasual = [
        'C#', 'Unity', 'NavMesh', 'Animator'];
    const labelsSecond = [
        'C', 'Memory Management', 'Data Structures', 'AVL Trees'
    ];
    const labels3D = [
        'Neural Netowrks', 'PointNet', 'Chamfer Distance', 'Primitive Fitting'
    ];
    const labelsThird = [
        'Python', 'Networking', 'UDP', 'TCP', 'Multithreading', 'Socket Programming'
    ];
    const labelsFourth = [
        'PyTorch', 'Robotics', 'Neural Safety Filtering', 'ROS2'
    ];
    const labelsPaper = [
        'HJ Reachability', 'DeepReach', 'Physics-Informed NNs', 'System Decomposition', 'Safe Control'
    ];
    const labelMultiFusion = [
        'Deep Learning', 'Stable Diffusion', 'ControlNet', 'Neural Fusion'
    ];
    // const allLabels = [...labelsFirst, ...labelsSecond, ...labelsThird];
    return(
        <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>

        <div className="projects-section">
            <h2 className="section-title">Research</h2>
            <div className="projects-grid">
                <div className="project">
                    <h2 className="paper-title">Hybrid Hamilton–Jacobi Reachability for High-Dimensional Autonomous Systems via System Decomposition and Learning</h2>
                    <p className="paper-venue">Paper · SFU MARS Lab · Submitted to L4DC 2026</p>
                    <p>Hamilton–Jacobi reachability tells us from which states a system can stay safe, but full-state grids grow exponentially with dimension. We integrate system decomposition and teacher supervision into DeepReach: low-dimensional subsystems are solved on grids and combined into a teacher value function, whose supervision strength adapts to the gap between leading subsystem values (motivated by leaking-corner analysis). Evaluated on a 4D Dubins car, 6D spacecraft docking, and a 10D quadrotor, it improves value accuracy and closed-loop control over the DeepReach baseline.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Topics:</span>
                        {labelsPaper.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="project">
                    <a href="https://cmpt720-hybrid-hj.vercel.app/" target="_blank" rel="noreferrer"><img src={ODP} className="zoom" alt="thumbnail"/></a>
                    <a href="https://cmpt720-hybrid-hj.vercel.app/" target="_blank" rel="noreferrer"><h2>Project Website: Hybrid HJ Safety Filtering</h2></a>
                    <p className="paper-venue">Interactive companion site</p>
                    <p>A hands-on walkthrough of the idea behind the paper, applied to a 4D car-like robot navigating around obstacles. </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="projects-section">
            <h2 className="section-title">Machine Learning</h2>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://github.com/krestianin/Multi_control_fusion" target="_blank" rel="noreferrer"><img src={robotColumns} className="zoom" alt="thumbnail"/></a>
                    <a href="https://github.com/krestianin/Multi_control_fusion" target="_blank" rel="noreferrer"><h2>Multi-ControlNet Image Generation</h2></a>
                    <p>A deep learning project exploring adaptive fusion for multi-ControlNet image generation. The system combines Canny edge and depth guidance inside a frozen Stable Diffusion v1.5 pipeline using a lightweight learned fusion network, replacing manually tuned control weights with per-layer residual mixing.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelMultiFusion.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="project">
                    <a href="https://github.com/Jaewon0407/Neural-Primitive-Fitting-for-3D-models" target="_blank" rel="noreferrer"><img src={hand} className="zoom" alt="thumbnail"/></a>
                    <a href="https://github.com/Jaewon0407/Neural-Primitive-Fitting-for-3D-models" target="_blank" rel="noreferrer"><h2>3D Shape Parametric Representation</h2></a>
                    <p>Approximate complex 3D geometry using a small set of simple parametric shapes via a PointNet-based architecture.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labels3D.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="projects-section">
            <h2 className="section-title">Game Dev</h2>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://www.notion.so/28d3f70d3f7a80f19bdde6ecd7f54741" target="_blank" rel="noreferrer"><img src={hex} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://www.notion.so/28d3f70d3f7a80f19bdde6ecd7f54741" target="_blank" rel="noreferrer"><h2>Horizon Expedition (in progress)</h2></a>
                    <p>A networked voxel RPG where players form parties, explore procedurally generated maps, battle other players and mobs, and mine or build within a fully destructible world.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="project">
                    <a href="https://ivanpostolov.itch.io/fight-vs-zombies" target="_blank" rel="noreferrer"><img src={controller} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://ivanpostolov.itch.io/fight-vs-zombies" target="_blank" rel="noreferrer"><h2>Guy vs. Zombies</h2></a>
                    <p>A third‑person zombie‑survival prototype where I implemented NavMesh/agent AI with lightweight custom obstacle avoidance
                        and off‑mesh traversal via a bespoke AgentLinkMover, a CharacterController‑based movement and camera rig, animation hooks,
                        health and melee combat, and ground‑aware resource spawning. Core loop: fight zombies, collect coins, and restore health at
                        a base with a 1:5 coin‑to‑HP ratio.</p>
                    <a href="https://github.com/krestianin/CasualGame" target="_blank" rel="noreferrer"><h2>GitHub link</h2></a>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelscasual.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="projects-section">
            <h2 className="section-title">Others</h2>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://github.com/krestianin/MyMalloc/tree/main" target="_blank" rel="noreferrer"><img src={floppydisk} className="zoom" alt="thumbnail"/></a>
                    <a href="https://github.com/krestianin/MyMalloc/tree/main" target="_blank" rel="noreferrer"><h2>Custom Memory Allocator</h2></a>
                    <p>This custom memory allocator is designed to efficiently manage memory allocation and deallocation requests.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="project">
                    <a href="https://github.com/sosokokos/Proxy-Server-CMPT371" target="_blank" rel="noreferrer"><img src={tcp} className="zoom" alt="thumbnail"/></a>
                    <a href="https://github.com/sosokokos/Proxy-Server-CMPT371" target="_blank" rel="noreferrer"><h2>Web Server</h2></a>
                    <p>Designed and implemented a high-performance, multi-threaded web server with caching and proxy capabilities in Python.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default Project;
