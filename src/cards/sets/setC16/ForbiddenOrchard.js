"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForbiddenOrchard extends UnimplementedCard {
  constructor (game) {
    super(game, "Forbidden Orchard", "Commander 2016", "C16");
  }
}

module.exports = ForbiddenOrchard;
