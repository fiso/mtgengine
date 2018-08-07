"use strict";
const Constants = require ("../../../Constants");
const KoboldDrillSergeantBase = require("../setME3/KoboldDrillSergeant");

class KoboldDrillSergeant extends KoboldDrillSergeantBase {
  constructor (game) {
    super(game, "Kobold Drill Sergeant", "Legends", "LEG");
  }
}

module.exports = KoboldDrillSergeant;
