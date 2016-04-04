"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VerdantTouchBase = require("../setSTH/VerdantTouch.js");

class VerdantTouch extends VerdantTouchBase {
  constructor(game) {
    super(game, "Verdant Touch", "Tempest Remastered", "TPR");
  }
}

module.exports = VerdantTouch;
