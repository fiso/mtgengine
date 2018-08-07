"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fork extends UnimplementedCard {
  constructor (game) {
    super(game, "Fork", "Masters Edition IV", "ME4");
  }
}

module.exports = Fork;
