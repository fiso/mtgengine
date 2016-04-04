"use strict";
const Constants = require ("../../../Constants");
const DesertTwisterBase = require("../setARN/DesertTwister");

class DesertTwister extends DesertTwisterBase {
  constructor(game) {
    super(game, "Desert Twister", "Masters Edition III", "ME3");
  }
}

module.exports = DesertTwister;
