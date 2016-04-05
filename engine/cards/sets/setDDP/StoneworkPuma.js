"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneworkPuma extends UnimplementedCard {
  constructor(game) {
    super(game, "Stonework Puma", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = StoneworkPuma;
