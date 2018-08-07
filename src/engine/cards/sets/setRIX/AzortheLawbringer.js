"use strict";
const Constants = require ("../../../Constants");
const AzortheLawbringerBase = require("../setPRIX/AzortheLawbringer");

class AzortheLawbringer extends AzortheLawbringerBase {
  constructor (game) {
    super(game, "Azor, the Lawbringer", "Rivals of Ixalan", "RIX");
  }
}

module.exports = AzortheLawbringer;
