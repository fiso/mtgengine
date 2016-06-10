"use strict";
const Constants = require ("../../../Constants");
const IslandofWakWakBase = require("../setARN/IslandofWakWak");

class IslandofWakWak extends IslandofWakWakBase {
  constructor (game) {
    super(game, "Island of Wak-Wak", "Masters Edition", "MED");
  }
}

module.exports = IslandofWakWak;
