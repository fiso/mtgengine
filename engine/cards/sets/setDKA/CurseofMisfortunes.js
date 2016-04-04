"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CurseofMisfortunes extends UnimplementedCard {
  constructor(game) {
    super(game, "Curse of Misfortunes", "Dark Ascension", "DKA");
  }
}

module.exports = CurseofMisfortunes;
