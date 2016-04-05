"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GriffinProtector extends UnimplementedCard {
  constructor(game) {
    super(game, "Griffin Protector", "Magic 2013", "M13");
  }
}

module.exports = GriffinProtector;
