"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShivanMeteor extends UnimplementedCard {
  constructor (game) {
    super(game, "Shivan Meteor", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = ShivanMeteor;
