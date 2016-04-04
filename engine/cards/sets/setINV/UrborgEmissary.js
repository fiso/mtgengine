"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UrborgEmissary extends Card {
  constructor(game) {
    super(game, "Urborg Emissary", "Invasion", "INV");
  }
}

module.exports = UrborgEmissary;
