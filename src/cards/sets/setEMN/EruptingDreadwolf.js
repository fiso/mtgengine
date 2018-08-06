"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EruptingDreadwolf extends UnimplementedCard {
  constructor (game) {
    super(game, "Erupting Dreadwolf", "Eldritch Moon", "EMN");
  }
}

module.exports = EruptingDreadwolf;
