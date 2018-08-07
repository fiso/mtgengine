"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalseProphet extends UnimplementedCard {
  constructor (game) {
    super(game, "False Prophet", "Commander 2011", "CMD");
  }
}

module.exports = FalseProphet;
