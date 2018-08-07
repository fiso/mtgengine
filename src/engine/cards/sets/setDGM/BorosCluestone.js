"use strict";
const Constants = require ("../../../Constants");
const BorosCluestoneBase = require("../setCM2/BorosCluestone");

class BorosCluestone extends BorosCluestoneBase {
  constructor (game) {
    super(game, "Boros Cluestone", "Dragon's Maze", "DGM");
  }
}

module.exports = BorosCluestone;
