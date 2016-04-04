"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EvergloveCourier extends UnimplementedCard {
  constructor(game) {
    super(game, "Everglove Courier", "Onslaught", "ONS");
  }
}

module.exports = EvergloveCourier;
