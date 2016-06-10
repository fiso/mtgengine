"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiscipleofLaw extends UnimplementedCard {
  constructor (game) {
    super(game, "Disciple of Law", "Urza's Saga", "USG");
  }
}

module.exports = DiscipleofLaw;
