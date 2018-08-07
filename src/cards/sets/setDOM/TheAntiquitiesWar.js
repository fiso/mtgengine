"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheAntiquitiesWar extends UnimplementedCard {
  constructor (game) {
    super(game, "The Antiquities War", "Dominaria", "DOM");
  }
}

module.exports = TheAntiquitiesWar;
