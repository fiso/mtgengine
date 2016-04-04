"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Martyrdom extends Card {
  constructor(game) {
    super(game, "Martyrdom", "Alliances", "ALL");
  }
}

module.exports = Martyrdom;
