"use strict";
const Constants = require ("../../../Constants");
const VerdantTouchBase = require("../setSTH/VerdantTouch");

class VerdantTouch extends VerdantTouchBase {
  constructor(game) {
    super(game, "Verdant Touch", "Tempest Remastered", "TPR");
  }
}

module.exports = VerdantTouch;
