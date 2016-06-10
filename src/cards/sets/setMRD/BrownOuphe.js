"use strict";
const Constants = require ("../../../Constants");
const BrownOupheBase = require("../setICE/BrownOuphe");

class BrownOuphe extends BrownOupheBase {
  constructor (game) {
    super(game, "Brown Ouphe", "Mirrodin", "MRD");
  }
}

module.exports = BrownOuphe;
