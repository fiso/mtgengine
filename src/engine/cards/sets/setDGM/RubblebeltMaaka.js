"use strict";
const Constants = require ("../../../Constants");
const RubblebeltMaakaBase = require("../setMM3/RubblebeltMaaka");

class RubblebeltMaaka extends RubblebeltMaakaBase {
  constructor (game) {
    super(game, "Rubblebelt Maaka", "Dragon's Maze", "DGM");
  }
}

module.exports = RubblebeltMaaka;
