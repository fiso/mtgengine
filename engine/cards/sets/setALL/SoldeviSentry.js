"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoldeviSentry extends UnimplementedCard {
  constructor(game) {
    super(game, "Soldevi Sentry", "Alliances", "ALL");
  }
}

module.exports = SoldeviSentry;
