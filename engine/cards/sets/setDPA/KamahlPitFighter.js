"use strict";
const Constants = require ("../../../Constants");
const KamahlPitFighterBase = require("../setp15A/KamahlPitFighter");

class KamahlPitFighter extends KamahlPitFighterBase {
  constructor(game) {
    super(game, "Kamahl, Pit Fighter", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = KamahlPitFighter;
