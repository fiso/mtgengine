"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GusthasScepter extends Card {
  constructor(game) {
    super(game, "Gustha's Scepter", "Alliances", "ALL");
  }
}

module.exports = GusthasScepter;
