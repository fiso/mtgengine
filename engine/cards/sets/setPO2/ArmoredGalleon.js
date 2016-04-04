"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArmoredGalleon extends Card {
  constructor(game) {
    super(game, "Armored Galleon", "Portal Second Age", "PO2");
  }
}

module.exports = ArmoredGalleon;
