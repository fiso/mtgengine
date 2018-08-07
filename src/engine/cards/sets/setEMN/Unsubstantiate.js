"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Unsubstantiate extends UnimplementedCard {
  constructor (game) {
    super(game, "Unsubstantiate", "Eldritch Moon", "EMN");
  }
}

module.exports = Unsubstantiate;
