"use strict";
const Constants = require ("../../../Constants");
const HumbleBase = require("../setEMA/Humble");

class Humble extends HumbleBase {
  constructor (game) {
    super(game, "Humble", "Urza's Saga", "USG");
  }
}

module.exports = Humble;
