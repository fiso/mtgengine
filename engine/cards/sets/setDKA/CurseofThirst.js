"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CurseofThirst extends Card {
  constructor(game) {
    super(game, "Curse of Thirst", "Dark Ascension", "DKA");
  }
}

module.exports = CurseofThirst;
