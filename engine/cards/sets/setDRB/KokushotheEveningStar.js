"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KokushotheEveningStarBase = require("../setCHK/KokushotheEveningStar.js");

class KokushotheEveningStar extends KokushotheEveningStarBase {
  constructor(game) {
    super(game, "Kokusho, the Evening Star", "From the Vault: Dragons", "DRB");
  }
}

module.exports = KokushotheEveningStar;
