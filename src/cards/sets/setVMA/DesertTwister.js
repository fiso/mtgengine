"use strict";
const Constants = require ("../../../Constants");
const DesertTwisterBase = require("../setCMA/DesertTwister");

class DesertTwister extends DesertTwisterBase {
  constructor (game) {
    super(game, "Desert Twister", "Vintage Masters", "VMA");
  }
}

module.exports = DesertTwister;
