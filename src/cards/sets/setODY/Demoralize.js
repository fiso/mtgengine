"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Demoralize extends UnimplementedCard {
  constructor (game) {
    super(game, "Demoralize", "Odyssey", "ODY");
  }
}

module.exports = Demoralize;
