"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AjanisMantraBase = require("../setDDH/AjanisMantra.js");

class AjanisMantra extends AjanisMantraBase {
  constructor(game) {
    super(game, "Ajani's Mantra", "Magic 2011", "M11");
  }
}

module.exports = AjanisMantra;
