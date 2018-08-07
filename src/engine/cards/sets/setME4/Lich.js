"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lich extends UnimplementedCard {
  constructor (game) {
    super(game, "Lich", "Masters Edition IV", "ME4");
  }
}

module.exports = Lich;
