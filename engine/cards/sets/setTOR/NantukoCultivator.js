"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NantukoCultivator extends Card {
  constructor(game) {
    super(game, "Nantuko Cultivator", "Torment", "TOR");
  }
}

module.exports = NantukoCultivator;
