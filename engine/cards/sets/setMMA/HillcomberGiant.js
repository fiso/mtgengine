"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HillcomberGiantBase = require("../setLRW/HillcomberGiant.js");

class HillcomberGiant extends HillcomberGiantBase {
  constructor(game) {
    super(game, "Hillcomber Giant", "Modern Masters", "MMA");
  }
}

module.exports = HillcomberGiant;
