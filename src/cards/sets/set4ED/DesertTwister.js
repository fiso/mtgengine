"use strict";
const Constants = require ("../../../Constants");
const DesertTwisterBase = require("../setCMA/DesertTwister");

class DesertTwister extends DesertTwisterBase {
  constructor (game) {
    super(game, "Desert Twister", "Fourth Edition", "4ED");
  }
}

module.exports = DesertTwister;
