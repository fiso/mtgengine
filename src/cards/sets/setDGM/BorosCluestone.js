"use strict";
const Constants = require ("../../../Constants");
const BorosCluestoneBase = require("../setC15/BorosCluestone");

class BorosCluestone extends BorosCluestoneBase {
  constructor (game) {
    super(game, "Boros Cluestone", "Dragon's Maze", "DGM");
  }
}

module.exports = BorosCluestone;
