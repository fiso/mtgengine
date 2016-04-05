"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Peek extends UnimplementedCard {
  constructor(game) {
    super(game, "Peek", "Odyssey", "ODY");
  }
}

module.exports = Peek;
