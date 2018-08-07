"use strict";
const Constants = require ("../../../Constants");
const OverbeingofMythBase = require("../setEVE/OverbeingofMyth");

class OverbeingofMyth extends OverbeingofMythBase {
  constructor (game) {
    super(game, "Overbeing of Myth", "Magic Online Promos", "PRM");
  }
}

module.exports = OverbeingofMyth;
