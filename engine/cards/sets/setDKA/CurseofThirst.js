"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CurseofThirst extends UnimplementedCard {
  constructor(game) {
    super(game, "Curse of Thirst", "Dark Ascension", "DKA");
  }
}

module.exports = CurseofThirst;
