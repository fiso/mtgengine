"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HellsparkElementalBase = require("../setCON/HellsparkElemental.js");

class HellsparkElemental extends HellsparkElementalBase {
  constructor(game) {
    super(game, "Hellspark Elemental", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = HellsparkElemental;
