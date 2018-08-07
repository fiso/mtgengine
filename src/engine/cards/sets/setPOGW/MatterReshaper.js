"use strict";
const Constants = require ("../../../Constants");
const MatterReshaperBase = require("../setOGW/MatterReshaper");

class MatterReshaper extends MatterReshaperBase {
  constructor (game) {
    super(game, "Matter Reshaper", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = MatterReshaper;
