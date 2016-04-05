"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PatrolSignaler extends UnimplementedCard {
  constructor(game) {
    super(game, "Patrol Signaler", "Eventide", "EVE");
  }
}

module.exports = PatrolSignaler;
