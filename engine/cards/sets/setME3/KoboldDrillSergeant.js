"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KoboldDrillSergeantBase = require("../setLEG/KoboldDrillSergeant.js");

class KoboldDrillSergeant extends KoboldDrillSergeantBase {
  constructor(game) {
    super(game, "Kobold Drill Sergeant", "Masters Edition III", "ME3");
  }
}

module.exports = KoboldDrillSergeant;
