"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UndeadMinotaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Undead Minotaur", "Magic 2014", "M14");
  }
}

module.exports = UndeadMinotaur;
