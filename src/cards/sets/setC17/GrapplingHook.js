"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrapplingHook extends UnimplementedCard {
  constructor (game) {
    super(game, "Grappling Hook", "Commander 2017", "C17");
  }
}

module.exports = GrapplingHook;
