"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElkinBottle extends UnimplementedCard {
  constructor(game) {
    super(game, "Elkin Bottle", "Deckmasters", "DKM");
  }
}

module.exports = ElkinBottle;
