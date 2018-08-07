"use strict";
const Constants = require ("../../../Constants");
const VerdantTouchBase = require("../setTPR/VerdantTouch");

class VerdantTouch extends VerdantTouchBase {
  constructor (game) {
    super(game, "Verdant Touch", "Stronghold", "STH");
  }
}

module.exports = VerdantTouch;
