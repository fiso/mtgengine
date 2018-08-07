"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tremble extends UnimplementedCard {
  constructor (game) {
    super(game, "Tremble", "Odyssey", "ODY");
  }
}

module.exports = Tremble;
