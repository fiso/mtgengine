"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SecondSight extends UnimplementedCard {
  constructor(game) {
    super(game, "Second Sight", "Darksteel", "DST");
  }
}

module.exports = SecondSight;
