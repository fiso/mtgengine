"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Trial extends UnimplementedCard {
  constructor (game) {
    super(game, "Trial", "Dissension", "DIS");
  }
}

module.exports = Trial;
