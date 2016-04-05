"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PennonBlade extends UnimplementedCard {
  constructor(game) {
    super(game, "Pennon Blade", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = PennonBlade;
