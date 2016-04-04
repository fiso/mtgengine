"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireElementalBase = require("../set6ED/FireElemental.js");

class FireElemental extends FireElementalBase {
  constructor(game) {
    super(game, "Fire Elemental", "Magic 2013", "M13");
  }
}

module.exports = FireElemental;
