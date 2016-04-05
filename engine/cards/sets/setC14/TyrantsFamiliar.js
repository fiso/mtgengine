"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TyrantsFamiliar extends UnimplementedCard {
  constructor(game) {
    super(game, "Tyrant's Familiar", "Commander 2014", "C14");
  }
}

module.exports = TyrantsFamiliar;
