"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImprisonThisInsolentWretch extends UnimplementedCard {
  constructor (game) {
    super(game, "Imprison This Insolent Wretch", "Promotional Schemes", "PARC");
  }
}

module.exports = ImprisonThisInsolentWretch;
