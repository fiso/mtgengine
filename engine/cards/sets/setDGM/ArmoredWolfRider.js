"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArmoredWolfRider extends Card {
  constructor(game) {
    super(game, "Armored Wolf-Rider", "Dragon's Maze", "DGM");
  }
}

module.exports = ArmoredWolfRider;
