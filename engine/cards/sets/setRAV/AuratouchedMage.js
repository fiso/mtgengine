"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AuratouchedMageBase = require("../setPC2/AuratouchedMage.js");

class AuratouchedMage extends AuratouchedMageBase {
  constructor(game) {
    super(game, "Auratouched Mage", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = AuratouchedMage;
