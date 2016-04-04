"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoleWormsBase = require("../set5ED/MoleWorms.js");

class MoleWorms extends MoleWormsBase {
  constructor(game) {
    super(game, "Mole Worms", "Ice Age", "ICE");
  }
}

module.exports = MoleWorms;
