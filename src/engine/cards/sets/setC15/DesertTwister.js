"use strict";
const Constants = require ("../../../Constants");
const DesertTwisterBase = require("../setCMA/DesertTwister");

class DesertTwister extends DesertTwisterBase {
  constructor (game) {
    super(game, "Desert Twister", "Commander 2015", "C15");
  }
}

module.exports = DesertTwister;
