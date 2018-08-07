"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlagwurmArmor extends UnimplementedCard {
  constructor (game) {
    super(game, "Slagwurm Armor", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = SlagwurmArmor;
