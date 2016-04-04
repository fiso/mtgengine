"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RollingEarthquake extends Card {
  constructor(game) {
    super(game, "Rolling Earthquake", "From the Vault: Annihilation (2014)", "V14");
  }
}

module.exports = RollingEarthquake;
