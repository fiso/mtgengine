"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Supply extends UnimplementedCard {
  constructor(game) {
    super(game, "Supply", "Dissension", "DIS");
  }
}

module.exports = Supply;
