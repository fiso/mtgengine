"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoundDetermined extends UnimplementedCard {
  constructor (game) {
    super(game, "Bound // Determined", "Dissension", "DIS");
  }
}

module.exports = BoundDetermined;
