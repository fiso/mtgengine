"use strict";
const Constants = require ("../../../Constants");
const JelennSphinxBase = require("../setBBD/JelennSphinx");

class JelennSphinx extends JelennSphinxBase {
  constructor (game) {
    super(game, "Jelenn Sphinx", "Dragon's Maze", "DGM");
  }
}

module.exports = JelennSphinx;
