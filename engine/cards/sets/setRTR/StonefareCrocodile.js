"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StonefareCrocodileBase = require("../setDDM/StonefareCrocodile.js");

class StonefareCrocodile extends StonefareCrocodileBase {
  constructor(game) {
    super(game, "Stonefare Crocodile", "Return to Ravnica", "RTR");
  }
}

module.exports = StonefareCrocodile;
