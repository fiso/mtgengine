"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lifeforce extends UnimplementedCard {
  constructor (game) {
    super(game, "Lifeforce", "Masters Edition IV", "ME4");
  }
}

module.exports = Lifeforce;
