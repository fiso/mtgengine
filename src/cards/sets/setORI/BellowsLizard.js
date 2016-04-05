"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BellowsLizard extends UnimplementedCard {
  constructor(game) {
    super(game, "Bellows Lizard", "Magic Origins", "ORI");
  }
}

module.exports = BellowsLizard;
