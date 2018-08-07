"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SquealingDevil extends UnimplementedCard {
  constructor (game) {
    super(game, "Squealing Devil", "Dissension", "DIS");
  }
}

module.exports = SquealingDevil;
