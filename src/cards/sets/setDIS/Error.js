"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Error extends UnimplementedCard {
  constructor (game) {
    super(game, "Error", "Dissension", "DIS");
  }
}

module.exports = Error;
