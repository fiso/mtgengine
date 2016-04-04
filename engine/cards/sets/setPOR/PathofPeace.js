"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PathofPeace extends Card {
  constructor(game) {
    super(game, "Path of Peace", "Portal", "POR");
  }
}

module.exports = PathofPeace;
