"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EasternPaladinBase = require("../set8ED/EasternPaladin.js");

class EasternPaladin extends EasternPaladinBase {
  constructor(game) {
    super(game, "Eastern Paladin", "Urza's Saga", "USG");
  }
}

module.exports = EasternPaladin;
