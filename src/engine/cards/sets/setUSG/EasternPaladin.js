"use strict";
const Constants = require ("../../../Constants");
const EasternPaladinBase = require("../set8ED/EasternPaladin");

class EasternPaladin extends EasternPaladinBase {
  constructor (game) {
    super(game, "Eastern Paladin", "Urza's Saga", "USG");
  }
}

module.exports = EasternPaladin;
