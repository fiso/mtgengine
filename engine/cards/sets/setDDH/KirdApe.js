"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KirdApeBase = require("../setARN/KirdApe.js");

class KirdApe extends KirdApeBase {
  constructor(game) {
    super(game, "Kird Ape", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = KirdApe;
