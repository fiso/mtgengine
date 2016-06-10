"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KioratheCrashingWave extends UnimplementedCard {
  constructor (game) {
    super(game, "Kiora, the Crashing Wave", "Born of the Gods", "BNG");
  }
}

module.exports = KioratheCrashingWave;
