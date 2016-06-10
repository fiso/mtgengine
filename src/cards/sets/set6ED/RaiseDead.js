"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RaiseDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Raise Dead", "Classic Sixth Edition", "6ED");
  }
}

module.exports = RaiseDead;
