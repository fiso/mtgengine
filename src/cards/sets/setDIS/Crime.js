"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Crime extends UnimplementedCard {
  constructor (game) {
    super(game, "Crime", "Dissension", "DIS");
  }
}

module.exports = Crime;
