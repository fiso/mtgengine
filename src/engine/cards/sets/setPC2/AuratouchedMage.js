"use strict";
const Constants = require ("../../../Constants");
const AuratouchedMageBase = require("../setPCA/AuratouchedMage");

class AuratouchedMage extends AuratouchedMageBase {
  constructor (game) {
    super(game, "Auratouched Mage", "Planechase 2012", "PC2");
  }
}

module.exports = AuratouchedMage;
