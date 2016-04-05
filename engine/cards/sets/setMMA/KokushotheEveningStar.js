"use strict";
const Constants = require ("../../../Constants");
const KokushotheEveningStarBase = require("../setCHK/KokushotheEveningStar");

class KokushotheEveningStar extends KokushotheEveningStarBase {
  constructor(game) {
    super(game, "Kokusho, the Evening Star", "Modern Masters", "MMA");
  }
}

module.exports = KokushotheEveningStar;
