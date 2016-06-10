"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gild extends UnimplementedCard {
  constructor (game) {
    super(game, "Gild", "Born of the Gods", "BNG");
  }
}

module.exports = Gild;
