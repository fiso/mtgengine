"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevouringDeep extends UnimplementedCard {
  constructor(game) {
    super(game, "Devouring Deep", "Legends", "LEG");
  }
}

module.exports = DevouringDeep;
