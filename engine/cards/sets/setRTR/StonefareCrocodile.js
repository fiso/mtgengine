"use strict";
const Constants = require ("../../../Constants");
const StonefareCrocodileBase = require("../setDDM/StonefareCrocodile");

class StonefareCrocodile extends StonefareCrocodileBase {
  constructor(game) {
    super(game, "Stonefare Crocodile", "Return to Ravnica", "RTR");
  }
}

module.exports = StonefareCrocodile;
