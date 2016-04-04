"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hystrodon extends UnimplementedCard {
  constructor(game) {
    super(game, "Hystrodon", "Onslaught", "ONS");
  }
}

module.exports = Hystrodon;
