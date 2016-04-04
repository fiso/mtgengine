"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LastRites extends Card {
  constructor(game) {
    super(game, "Last Rites", "Odyssey", "ODY");
  }
}

module.exports = LastRites;
