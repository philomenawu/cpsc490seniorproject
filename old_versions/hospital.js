// Perlin noise texture (https://github.com/joeiddon/perlin?tab=readme-ov-file)

// Copyright (c) 2013, Joseph Gentle

// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.


let canvas = document.getElementById('myCanvas4');
let ctx = canvas.getContext('2d');

let x = canvas.width/2;
let y = 50;

function drawGrid() {
  const GRID_SIZE = 4;
  const RESOLUTION = 130;
  const COLOR_SCALE = 255;

  let pixel_size = canvas.width / RESOLUTION;
  let num_pixels = GRID_SIZE / RESOLUTION;

  for (let y = 0; y < GRID_SIZE; y += num_pixels / GRID_SIZE){
    for (let x = 0; x < GRID_SIZE; x += num_pixels / GRID_SIZE){
      let v = parseInt(perlin.get(x, y) * COLOR_SCALE);
      ctx.fillStyle = `rgb(${v}, ${v}, ${v})`;
      ctx.fillRect(
        x / GRID_SIZE * canvas.width,
        y / GRID_SIZE * canvas.width,
        pixel_size,
        pixel_size
      );
    }
  }
};

drawGrid();