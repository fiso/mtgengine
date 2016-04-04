"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CobraTrapBase = require("../setC15/CobraTrap.js");

class CobraTrap extends CobraTrapBase {
  constructor(game) {
    super(game, "Cobra Trap", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = CobraTrap;
