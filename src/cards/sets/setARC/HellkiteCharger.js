"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HellkiteCharger extends UnimplementedCard {
  constructor (game) {
    super(game, "Hellkite Charger", "Archenemy", "ARC");
  }
}

module.exports = HellkiteCharger;
