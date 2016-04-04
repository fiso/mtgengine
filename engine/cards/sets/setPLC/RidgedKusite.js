"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RidgedKusite extends Card {
  constructor(game) {
    super(game, "Ridged Kusite", "Planar Chaos", "PLC");
  }
}

module.exports = RidgedKusite;
