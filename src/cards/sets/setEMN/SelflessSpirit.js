"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SelflessSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Selfless Spirit", "Eldritch Moon", "EMN");
  }
}

module.exports = SelflessSpirit;
