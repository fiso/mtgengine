"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Smoke extends UnimplementedCard {
  constructor (game) {
    super(game, "Smoke", "Masters Edition IV", "ME4");
  }
}

module.exports = Smoke;
