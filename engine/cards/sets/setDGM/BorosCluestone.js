"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BorosCluestoneBase = require("../setC15/BorosCluestone.js");

class BorosCluestone extends BorosCluestoneBase {
  constructor(game) {
    super(game, "Boros Cluestone", "Dragon's Maze", "DGM");
  }
}

module.exports = BorosCluestone;
