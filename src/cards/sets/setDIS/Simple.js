"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Simple extends UnimplementedCard {
  constructor (game) {
    super(game, "Simple", "Dissension", "DIS");
  }
}

module.exports = Simple;
