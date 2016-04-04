"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HecklingFiends extends Card {
  constructor(game) {
    super(game, "Heckling Fiends", "Dark Ascension", "DKA");
  }
}

module.exports = HecklingFiends;
