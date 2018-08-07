"use strict";
const Constants = require ("../../../Constants");
const HumbleDefectorBase = require("../setA25/HumbleDefector");

class HumbleDefector extends HumbleDefectorBase {
  constructor (game) {
    super(game, "Humble Defector", "Fate Reforged", "FRF");
  }
}

module.exports = HumbleDefector;
