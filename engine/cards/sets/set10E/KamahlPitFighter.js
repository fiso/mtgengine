"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KamahlPitFighterBase = require("../setp15A/KamahlPitFighter.js");

class KamahlPitFighter extends KamahlPitFighterBase {
  constructor(game) {
    super(game, "Kamahl, Pit Fighter", "Tenth Edition", "10E");
  }
}

module.exports = KamahlPitFighter;
