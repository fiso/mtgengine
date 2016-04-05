"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Recantation extends UnimplementedCard {
  constructor(game) {
    super(game, "Recantation", "Urza's Saga", "USG");
  }
}

module.exports = Recantation;
