"use strict";
const Constants = require ("../../../Constants");
const AncientGrudgeBase = require("../setpFNM/AncientGrudge");

class AncientGrudge extends AncientGrudgeBase {
  constructor(game) {
    super(game, "Ancient Grudge", "Time Spiral", "TSP");
  }
}

module.exports = AncientGrudge;
