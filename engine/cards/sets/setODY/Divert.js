"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Divert extends UnimplementedCard {
  constructor(game) {
    super(game, "Divert", "Odyssey", "ODY");
  }
}

module.exports = Divert;
