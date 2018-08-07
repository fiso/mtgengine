"use strict";
const Constants = require ("../../../Constants");
const BrownOupheBase = require("../setMRD/BrownOuphe");

class BrownOuphe extends BrownOupheBase {
  constructor (game) {
    super(game, "Brown Ouphe", "Ice Age", "ICE");
  }
}

module.exports = BrownOuphe;
