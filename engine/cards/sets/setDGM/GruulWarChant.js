"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GruulWarChant extends Card {
  constructor(game) {
    super(game, "Gruul War Chant", "Dragon's Maze", "DGM");
  }
}

module.exports = GruulWarChant;
