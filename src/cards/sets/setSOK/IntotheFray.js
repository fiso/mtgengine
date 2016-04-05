"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IntotheFray extends UnimplementedCard {
  constructor(game) {
    super(game, "Into the Fray", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = IntotheFray;
