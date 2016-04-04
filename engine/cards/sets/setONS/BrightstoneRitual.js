"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrightstoneRitual extends UnimplementedCard {
  constructor(game) {
    super(game, "Brightstone Ritual", "Onslaught", "ONS");
  }
}

module.exports = BrightstoneRitual;
