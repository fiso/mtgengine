"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FreneticEfreet extends UnimplementedCard {
  constructor (game) {
    super(game, "Frenetic Efreet", "World Championship Decks 1997", "WC97");
  }
}

module.exports = FreneticEfreet;
