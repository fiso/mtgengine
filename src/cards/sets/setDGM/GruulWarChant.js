"use strict";
const Constants = require ("../../../Constants");
const GruulWarChantBase = require("../setMM3/GruulWarChant");

class GruulWarChant extends GruulWarChantBase {
  constructor (game) {
    super(game, "Gruul War Chant", "Dragon's Maze", "DGM");
  }
}

module.exports = GruulWarChant;
