"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Browse extends Card {
  constructor(game) {
    super(game, "Browse", "Alliances", "ALL");
  }
}

module.exports = Browse;
