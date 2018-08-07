"use strict";
const Constants = require ("../../../Constants");
const DesertTwisterBase = require("../setCMA/DesertTwister");

class DesertTwister extends DesertTwisterBase {
  constructor (game) {
    super(game, "Desert Twister", "Commander 2014", "C14");
  }
}

module.exports = DesertTwister;
