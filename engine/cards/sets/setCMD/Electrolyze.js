"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElectrolyzeBase = require("../setpCMP/Electrolyze.js");

class Electrolyze extends ElectrolyzeBase {
  constructor(game) {
    super(game, "Electrolyze", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Electrolyze;
