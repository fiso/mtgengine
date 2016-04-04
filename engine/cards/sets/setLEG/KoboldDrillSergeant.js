"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KoboldDrillSergeant extends Card {
  constructor(game) {
    super(game, "Kobold Drill Sergeant", "Legends", "LEG");
  }
}

module.exports = KoboldDrillSergeant;
