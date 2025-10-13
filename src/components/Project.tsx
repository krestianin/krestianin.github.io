import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import tcp from '../assets/images/tcp.png';
import controller from '../assets/images/controller.png';
import floppydisk from '../assets/images/floppy-disk.png';
import hex from '../assets/images/hex.png';
import Chip from '@mui/material/Chip';
import '../assets/styles/Project.scss';

function Project() {
   const labelsFirst = [
        'C#', 'Unity', 'Mirror', 'Shaders', 'GPU Instancing'
    ];
    const labelsSecond = [
        'C', 'Memory Management', 'Data Structures', 'AVL Trees'
    ];
    const labelsThird = [
        'Python', 'Networking', 'UDP', 'TCP', 'Multithreading', 'Socket Programming'
    ];
    // const allLabels = [...labelsFirst, ...labelsSecond, ...labelsThird];
    return(
        <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>

        <div className="projects-grid">
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={hex} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Horizon Expedition (in progress)</h2></a>
                <p>A networked voxel RPG where players form parties, explore procedurally generated maps, battle other players and mobs, and mine or build within a fully destructible world.</p>
                <div className="flex-chips">
                    <span className="chip-title">Tech stack:</span>
                    {labelsFirst.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                </div>
           </div>
            <div className="project">
                <a href="https://github.com/krestianin/CasualGame" target="_blank" rel="noreferrer"><img src={controller} className="zoom icon-image" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/krestianin/CasualGame" target="_blank" rel="noreferrer"><h2>Casual Game</h2></a>
                <p>Casual.</p>
             </div>
            <div className="project">
                <a href="https://github.com/krestianin/MyMalloc/tree/main" target="_blank" rel="noreferrer"><img src={floppydisk} className="zoom icon-image" alt="thumbnail"/></a>
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
                <a href="https://github.com/sosokokos/Proxy-Server-CMPT371" target="_blank" rel="noreferrer"><img src={tcp} className="zoom" alt="thumbnail" width="100%"/></a>
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
    );
}

export default Project;
