"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeizetheDay extends Card {
  constructor(game) {
    super(game, "Seize the Day", "Odyssey", "ODY");
  }
}

module.exports = SeizetheDay;
