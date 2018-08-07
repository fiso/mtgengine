"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IgniteDisorder extends UnimplementedCard {
  constructor (game) {
    super(game, "Ignite Disorder", "Magic 2010", "M10");
  }
}

module.exports = IgniteDisorder;
