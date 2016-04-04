"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pure extends UnimplementedCard {
  constructor(game) {
    super(game, "Pure", "Dissension", "DIS");
  }
}

module.exports = Pure;
