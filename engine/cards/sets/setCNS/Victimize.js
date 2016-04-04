"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VictimizeBase = require("../setC14/Victimize.js");

class Victimize extends VictimizeBase {
  constructor(game) {
    super(game, "Victimize", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Victimize;
