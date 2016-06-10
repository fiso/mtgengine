"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SelflessCathar extends UnimplementedCard {
  constructor (game) {
    super(game, "Selfless Cathar", "Innistrad", "ISD");
  }
}

module.exports = SelflessCathar;
