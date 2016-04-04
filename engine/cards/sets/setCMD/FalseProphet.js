"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalseProphet extends UnimplementedCard {
  constructor(game) {
    super(game, "False Prophet", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = FalseProphet;
