"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Jackknight extends UnimplementedCard {
  constructor (game) {
    super(game, "Jackknight", "Unstable", "UST");
  }
}

module.exports = Jackknight;
