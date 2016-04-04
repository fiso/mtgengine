"use strict";
const Constants = require ("../../../Constants");
const DesertTwisterBase = require("../setARN/DesertTwister");

class DesertTwister extends DesertTwisterBase {
  constructor(game) {
    super(game, "Desert Twister", "Mercadian Masques", "MMQ");
  }
}

module.exports = DesertTwister;
