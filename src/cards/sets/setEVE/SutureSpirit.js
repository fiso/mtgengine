"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SutureSpirit extends UnimplementedCard {
  constructor(game) {
    super(game, "Suture Spirit", "Eventide", "EVE");
  }
}

module.exports = SutureSpirit;
