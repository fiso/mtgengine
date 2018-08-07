"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElkinBottle extends UnimplementedCard {
  constructor (game) {
    super(game, "Elkin Bottle", "Masters Edition II", "ME2");
  }
}

module.exports = ElkinBottle;
