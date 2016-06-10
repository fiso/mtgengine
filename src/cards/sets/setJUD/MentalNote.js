"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MentalNote extends UnimplementedCard {
  constructor (game) {
    super(game, "Mental Note", "Judgment", "JUD");
  }
}

module.exports = MentalNote;
