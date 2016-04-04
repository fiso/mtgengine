"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IslandofWakWakBase = require("../setARN/IslandofWakWak.js");

class IslandofWakWak extends IslandofWakWakBase {
  constructor(game) {
    super(game, "Island of Wak-Wak", "Masters Edition", "MED");
  }
}

module.exports = IslandofWakWak;
