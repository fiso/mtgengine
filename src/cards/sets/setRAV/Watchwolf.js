"use strict";
const Constants = require ("../../../Constants");
const WatchwolfBase = require("../setARC/Watchwolf");

class Watchwolf extends WatchwolfBase {
  constructor (game) {
    super(game, "Watchwolf", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Watchwolf;
