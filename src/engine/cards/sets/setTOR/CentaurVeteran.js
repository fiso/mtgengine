"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CentaurVeteran extends UnimplementedCard {
  constructor (game) {
    super(game, "Centaur Veteran", "Torment", "TOR");
  }
}

module.exports = CentaurVeteran;
