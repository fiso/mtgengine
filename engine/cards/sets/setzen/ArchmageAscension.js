"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArchmageAscension extends Card {
  constructor(game) {
    super(game, "Archmage Ascension", "Zendikar", "ZEN");
  }
}

module.exports = ArchmageAscension;
