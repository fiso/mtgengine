"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArmoredGuardian extends Card {
  constructor(game) {
    super(game, "Armored Guardian", "Invasion", "INV");
  }
}

module.exports = ArmoredGuardian;
