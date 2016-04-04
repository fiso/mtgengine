"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArmorofThornsBase = require("../setMIR/ArmorofThorns.js");

class ArmorofThorns extends ArmorofThornsBase {
  constructor(game) {
    super(game, "Armor of Thorns", "Vintage Masters", "VMA");
  }
}

module.exports = ArmorofThorns;
