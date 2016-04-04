"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MeddlingKids extends Card {
  constructor(game) {
    super(game, "Meddling Kids", "Unhinged", "UNH");
  }
}

module.exports = MeddlingKids;
