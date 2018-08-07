"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GriffinProtector extends UnimplementedCard {
  constructor (game) {
    super(game, "Griffin Protector", "Masters 25", "A25");
  }
}

module.exports = GriffinProtector;
