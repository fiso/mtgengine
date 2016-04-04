"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mutavault extends Card {
  constructor(game) {
    super(game, "Mutavault", "Champs and States", "pCMP");
  }
}

module.exports = Mutavault;
