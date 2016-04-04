"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Phelddagrif extends Card {
  constructor(game) {
    super(game, "Phelddagrif", "Alliances", "ALL");
  }
}

module.exports = Phelddagrif;
