"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rhino extends UnimplementedCard {
  constructor (game) {
    super(game, "Rhino-", "Unstable", "UST");
  }
}

module.exports = Rhino;
