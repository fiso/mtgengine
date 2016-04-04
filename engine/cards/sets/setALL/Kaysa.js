"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Kaysa extends Card {
  constructor(game) {
    super(game, "Kaysa", "Alliances", "ALL");
  }
}

module.exports = Kaysa;
