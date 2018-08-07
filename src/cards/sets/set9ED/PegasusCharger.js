"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PegasusCharger extends UnimplementedCard {
  constructor (game) {
    super(game, "Pegasus Charger", "Ninth Edition", "9ED");
  }
}

module.exports = PegasusCharger;
