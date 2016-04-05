"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoggSentry extends UnimplementedCard {
  constructor(game) {
    super(game, "Mogg Sentry", "Eighth Edition", "8ED");
  }
}

module.exports = MoggSentry;
