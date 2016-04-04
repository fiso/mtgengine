"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RushingRiver extends UnimplementedCard {
  constructor(game) {
    super(game, "Rushing River", "Planeshift", "PLS");
  }
}

module.exports = RushingRiver;
