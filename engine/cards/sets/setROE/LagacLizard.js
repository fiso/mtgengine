"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LagacLizard extends UnimplementedCard {
  constructor(game) {
    super(game, "Lagac Lizard", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = LagacLizard;
