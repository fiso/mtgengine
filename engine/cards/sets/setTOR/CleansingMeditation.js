"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CleansingMeditation extends Card {
  constructor(game) {
    super(game, "Cleansing Meditation", "Torment", "TOR");
  }
}

module.exports = CleansingMeditation;
