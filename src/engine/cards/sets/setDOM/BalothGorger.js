"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalothGorger extends UnimplementedCard {
  constructor (game) {
    super(game, "Baloth Gorger", "Dominaria", "DOM");
  }
}

module.exports = BalothGorger;
