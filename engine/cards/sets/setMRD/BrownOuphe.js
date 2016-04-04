"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrownOupheBase = require("../setICE/BrownOuphe.js");

class BrownOuphe extends BrownOupheBase {
  constructor(game) {
    super(game, "Brown Ouphe", "Mirrodin", "MRD");
  }
}

module.exports = BrownOuphe;
