"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoggSentry extends UnimplementedCard {
  constructor (game) {
    super(game, "Mogg Sentry", "Ninth Edition", "9ED");
  }
}

module.exports = MoggSentry;
