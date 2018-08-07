"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DepartedDeckhand extends UnimplementedCard {
  constructor (game) {
    super(game, "Departed Deckhand", "Core Set 2019", "M19");
  }
}

module.exports = DepartedDeckhand;
