"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvenRiders extends UnimplementedCard {
  constructor(game) {
    super(game, "Elven Riders", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ElvenRiders;
