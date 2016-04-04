"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StormSpiritBase = require("../setICE/StormSpirit.js");

class StormSpirit extends StormSpiritBase {
  constructor(game) {
    super(game, "Storm Spirit", "Masters Edition II", "ME2");
  }
}

module.exports = StormSpirit;
