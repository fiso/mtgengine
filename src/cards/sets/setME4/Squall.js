"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Squall extends UnimplementedCard {
  constructor (game) {
    super(game, "Squall", "Masters Edition IV", "ME4");
  }
}

module.exports = Squall;
