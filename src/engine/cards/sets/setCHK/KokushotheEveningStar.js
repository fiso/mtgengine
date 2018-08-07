"use strict";
const Constants = require ("../../../Constants");
const KokushotheEveningStarBase = require("../setIMA/KokushotheEveningStar");

class KokushotheEveningStar extends KokushotheEveningStarBase {
  constructor (game) {
    super(game, "Kokusho, the Evening Star", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KokushotheEveningStar;
