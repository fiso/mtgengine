"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RaiseDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Raise Dead", "Welcome Deck 2017", "W17");
  }
}

module.exports = RaiseDead;
