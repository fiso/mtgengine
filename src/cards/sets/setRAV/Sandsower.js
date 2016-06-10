"use strict";
const Constants = require ("../../../Constants");
const SandsowerBase = require("../setMMA/Sandsower");

class Sandsower extends SandsowerBase {
  constructor (game) {
    super(game, "Sandsower", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Sandsower;
