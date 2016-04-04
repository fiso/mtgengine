"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NighthowlerBase = require("../setC15/Nighthowler.js");

class Nighthowler extends NighthowlerBase {
  constructor(game) {
    super(game, "Nighthowler", "Magic Game Day", "pMGD");
  }
}

module.exports = Nighthowler;
