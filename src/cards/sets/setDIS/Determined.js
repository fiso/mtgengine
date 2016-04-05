"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Determined extends UnimplementedCard {
  constructor(game) {
    super(game, "Determined", "Dissension", "DIS");
  }
}

module.exports = Determined;
