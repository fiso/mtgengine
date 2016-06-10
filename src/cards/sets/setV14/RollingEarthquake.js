"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RollingEarthquake extends UnimplementedCard {
  constructor (game) {
    super(game, "Rolling Earthquake", "From the Vault: Annihilation (2014)", "V14");
  }
}

module.exports = RollingEarthquake;
