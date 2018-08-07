"use strict";
const Constants = require ("../../../Constants");
const KamahlPitFighterBase = require("../setDDS/KamahlPitFighter");

class KamahlPitFighter extends KamahlPitFighterBase {
  constructor (game) {
    super(game, "Kamahl, Pit Fighter", "Tenth Edition", "10E");
  }
}

module.exports = KamahlPitFighter;
