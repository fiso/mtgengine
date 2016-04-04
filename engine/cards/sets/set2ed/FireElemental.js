"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireElementalBase = require("../set6ED/FireElemental.js");

class FireElemental extends FireElementalBase {
  constructor(game) {
    super(game, "Fire Elemental", "Unlimited Edition", "2ED");
  }
}

module.exports = FireElemental;
