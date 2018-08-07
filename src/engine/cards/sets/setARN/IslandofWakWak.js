"use strict";
const Constants = require ("../../../Constants");
const IslandofWakWakBase = require("../setMED/IslandofWakWak");

class IslandofWakWak extends IslandofWakWakBase {
  constructor (game) {
    super(game, "Island of Wak-Wak", "Arabian Nights", "ARN");
  }
}

module.exports = IslandofWakWak;
