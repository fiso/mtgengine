"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StreetSavvy extends Card {
  constructor(game) {
    super(game, "Street Savvy", "Dissension", "DIS");
  }
}

module.exports = StreetSavvy;
