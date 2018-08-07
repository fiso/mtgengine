"use strict";
const Constants = require ("../../../Constants");
const RescueBase = require("../setDOM/Rescue");

class Rescue extends RescueBase {
  constructor (game) {
    super(game, "Rescue", "Urza's Destiny", "UDS");
  }
}

module.exports = Rescue;
