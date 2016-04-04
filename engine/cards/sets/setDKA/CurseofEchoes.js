"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CurseofEchoes extends Card {
  constructor(game) {
    super(game, "Curse of Echoes", "Dark Ascension", "DKA");
  }
}

module.exports = CurseofEchoes;
