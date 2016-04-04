"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofReverenceBase = require("../setC13/WallofReverence.js");

class WallofReverence extends WallofReverenceBase {
  constructor(game) {
    super(game, "Wall of Reverence", "Conflux", "CON");
  }
}

module.exports = WallofReverence;
