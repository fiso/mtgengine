"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DuelistsHeritage extends UnimplementedCard {
  constructor (game) {
    super(game, "Duelist's Heritage", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = DuelistsHeritage;
