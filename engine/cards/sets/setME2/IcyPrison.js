"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IcyPrisonBase = require("../setICE/IcyPrison.js");

class IcyPrison extends IcyPrisonBase {
  constructor(game) {
    super(game, "Icy Prison", "Masters Edition II", "ME2");
  }
}

module.exports = IcyPrison;
