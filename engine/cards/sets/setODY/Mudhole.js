"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mudhole extends UnimplementedCard {
  constructor(game) {
    super(game, "Mudhole", "Odyssey", "ODY");
  }
}

module.exports = Mudhole;
