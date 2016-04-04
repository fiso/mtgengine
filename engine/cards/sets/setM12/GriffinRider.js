"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GriffinRider extends Card {
  constructor(game) {
    super(game, "Griffin Rider", "Magic 2012", "M12");
  }
}

module.exports = GriffinRider;
