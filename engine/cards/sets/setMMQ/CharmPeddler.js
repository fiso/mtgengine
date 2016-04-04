"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CharmPeddler extends Card {
  constructor(game) {
    super(game, "Charm Peddler", "Mercadian Masques", "MMQ");
  }
}

module.exports = CharmPeddler;
