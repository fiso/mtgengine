"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DuskCharger extends UnimplementedCard {
  constructor (game) {
    super(game, "Dusk Charger", "Rivals of Ixalan", "RIX");
  }
}

module.exports = DuskCharger;
