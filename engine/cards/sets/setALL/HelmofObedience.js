"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HelmofObedience extends Card {
  constructor(game) {
    super(game, "Helm of Obedience", "Alliances", "ALL");
  }
}

module.exports = HelmofObedience;
