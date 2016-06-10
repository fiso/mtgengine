"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UndeadAlchemist extends UnimplementedCard {
  constructor (game) {
    super(game, "Undead Alchemist", "Innistrad", "ISD");
  }
}

module.exports = UndeadAlchemist;
