"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CleansingMeditation extends UnimplementedCard {
  constructor (game) {
    super(game, "Cleansing Meditation", "Torment", "TOR");
  }
}

module.exports = CleansingMeditation;
