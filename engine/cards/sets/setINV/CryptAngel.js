"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CryptAngel extends Card {
  constructor(game) {
    super(game, "Crypt Angel", "Invasion", "INV");
  }
}

module.exports = CryptAngel;
