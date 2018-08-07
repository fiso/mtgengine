"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PureSimple extends UnimplementedCard {
  constructor (game) {
    super(game, "Pure // Simple", "Dissension", "DIS");
  }
}

module.exports = PureSimple;
