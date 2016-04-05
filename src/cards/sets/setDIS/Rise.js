"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rise extends UnimplementedCard {
  constructor(game) {
    super(game, "Rise", "Dissension", "DIS");
  }
}

module.exports = Rise;
