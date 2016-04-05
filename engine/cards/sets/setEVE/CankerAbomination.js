"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CankerAbomination extends UnimplementedCard {
  constructor(game) {
    super(game, "Canker Abomination", "Eventide", "EVE");
  }
}

module.exports = CankerAbomination;
