"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Undergrowth extends Card {
  constructor(game) {
    super(game, "Undergrowth", "Alliances", "ALL");
  }
}

module.exports = Undergrowth;
