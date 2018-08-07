"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoyagerStaff extends UnimplementedCard {
  constructor (game) {
    super(game, "Voyager Staff", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = VoyagerStaff;
