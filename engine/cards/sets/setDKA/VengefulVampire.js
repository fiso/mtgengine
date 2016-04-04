"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VengefulVampire extends Card {
  constructor(game) {
    super(game, "Vengeful Vampire", "Dark Ascension", "DKA");
  }
}

module.exports = VengefulVampire;
