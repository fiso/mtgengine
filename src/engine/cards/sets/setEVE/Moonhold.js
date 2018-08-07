"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Moonhold extends UnimplementedCard {
  constructor (game) {
    super(game, "Moonhold", "Eventide", "EVE");
  }
}

module.exports = Moonhold;
