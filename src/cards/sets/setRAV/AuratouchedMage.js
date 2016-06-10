"use strict";
const Constants = require ("../../../Constants");
const AuratouchedMageBase = require("../setPC2/AuratouchedMage");

class AuratouchedMage extends AuratouchedMageBase {
  constructor (game) {
    super(game, "Auratouched Mage", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = AuratouchedMage;
