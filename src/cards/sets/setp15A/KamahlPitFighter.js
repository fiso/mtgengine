"use strict";
const Constants = require ("../../../Constants");
const KamahlPitFighterBase = require("../setDDS/KamahlPitFighter");

class KamahlPitFighter extends KamahlPitFighterBase {
  constructor (game) {
    super(game, "Kamahl, Pit Fighter", "15th Anniversary Cards", "P15A");
  }
}

module.exports = KamahlPitFighter;
