"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AuriokSurvivors extends UnimplementedCard {
  constructor (game) {
    super(game, "Auriok Survivors", "New Phyrexia", "NPH");
  }
}

module.exports = AuriokSurvivors;
