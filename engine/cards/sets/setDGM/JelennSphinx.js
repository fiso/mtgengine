"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JelennSphinx extends Card {
  constructor(game) {
    super(game, "Jelenn Sphinx", "Dragon's Maze", "DGM");
  }
}

module.exports = JelennSphinx;
