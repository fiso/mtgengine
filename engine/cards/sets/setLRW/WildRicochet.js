"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WildRicochetBase = require("../setC13/WildRicochet.js");

class WildRicochet extends WildRicochetBase {
  constructor(game) {
    super(game, "Wild Ricochet", "Lorwyn", "LRW");
  }
}

module.exports = WildRicochet;
