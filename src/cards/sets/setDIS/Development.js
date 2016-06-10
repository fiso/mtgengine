"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Development extends UnimplementedCard {
  constructor (game) {
    super(game, "Development", "Dissension", "DIS");
  }
}

module.exports = Development;
