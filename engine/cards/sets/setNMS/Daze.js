"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DazeBase = require("../setDD3_JVC/Daze.js");

class Daze extends DazeBase {
  constructor(game) {
    super(game, "Daze", "Nemesis", "NMS");
  }
}

module.exports = Daze;
