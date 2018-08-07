"use strict";
const Constants = require ("../../../Constants");
const PrimordialSageBase = require("../setCMA/PrimordialSage");

class PrimordialSage extends PrimordialSageBase {
  constructor (game) {
    super(game, "Primordial Sage", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = PrimordialSage;
