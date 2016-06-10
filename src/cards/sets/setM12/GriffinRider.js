"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GriffinRider extends UnimplementedCard {
  constructor (game) {
    super(game, "Griffin Rider", "Magic 2012", "M12");
  }
}

module.exports = GriffinRider;
