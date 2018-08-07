"use strict";
const Constants = require ("../../../Constants");
const HostilityBase = require("../setCM2/Hostility");

class Hostility extends HostilityBase {
  constructor (game) {
    super(game, "Hostility", "Commander 2015", "C15");
  }
}

module.exports = Hostility;
