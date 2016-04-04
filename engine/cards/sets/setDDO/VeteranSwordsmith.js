"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeteranSwordsmith extends UnimplementedCard {
  constructor(game) {
    super(game, "Veteran Swordsmith", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = VeteranSwordsmith;
