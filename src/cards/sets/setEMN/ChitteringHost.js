"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChitteringHost extends UnimplementedCard {
  constructor (game) {
    super(game, "Chittering Host", "Eldritch Moon", "EMN");
  }
}

module.exports = ChitteringHost;
