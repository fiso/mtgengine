"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hateflayer extends UnimplementedCard {
  constructor(game) {
    super(game, "Hateflayer", "Eventide", "EVE");
  }
}

module.exports = Hateflayer;
