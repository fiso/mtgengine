"use strict";
const Constants = require ("../../../Constants");
const HumbleDefectorBase = require("../setA25/HumbleDefector");

class HumbleDefector extends HumbleDefectorBase {
  constructor (game) {
    super(game, "Humble Defector", "Commander 2016", "C16");
  }
}

module.exports = HumbleDefector;
