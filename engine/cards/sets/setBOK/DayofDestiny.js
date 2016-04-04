"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DayofDestiny extends Card {
  constructor(game) {
    super(game, "Day of Destiny", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = DayofDestiny;
