"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Aladdin extends UnimplementedCard {
  constructor (game) {
    super(game, "Aladdin", "Masters Edition IV", "ME4");
  }
}

module.exports = Aladdin;
