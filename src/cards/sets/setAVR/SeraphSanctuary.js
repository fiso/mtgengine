"use strict";
const Constants = require ("../../../Constants");
const SeraphSanctuaryBase = require("../setDDQ/SeraphSanctuary");

class SeraphSanctuary extends SeraphSanctuaryBase {
  constructor (game) {
    super(game, "Seraph Sanctuary", "Avacyn Restored", "AVR");
  }
}

module.exports = SeraphSanctuary;
