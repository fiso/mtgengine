"use strict";
const Constants = require ("../../../Constants");
const HostilityBase = require("../setC15/Hostility");

class Hostility extends HostilityBase {
  constructor (game) {
    super(game, "Hostility", "Lorwyn", "LRW");
  }
}

module.exports = Hostility;
