"use strict";
const Constants = require ("../../../Constants");
const DesertTwisterBase = require("../setARN/DesertTwister");

class DesertTwister extends DesertTwisterBase {
  constructor(game) {
    super(game, "Desert Twister", "Revised Edition", "3ED");
  }
}

module.exports = DesertTwister;
