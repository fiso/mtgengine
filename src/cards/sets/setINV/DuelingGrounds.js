"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DuelingGrounds extends UnimplementedCard {
  constructor (game) {
    super(game, "Dueling Grounds", "Invasion", "INV");
  }
}

module.exports = DuelingGrounds;
