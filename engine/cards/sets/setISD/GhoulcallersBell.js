"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhoulcallersBell extends Card {
  constructor(game) {
    super(game, "Ghoulcaller's Bell", "Innistrad", "ISD");
  }
}

module.exports = GhoulcallersBell;
