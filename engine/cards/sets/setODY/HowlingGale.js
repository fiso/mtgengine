"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HowlingGale extends UnimplementedCard {
  constructor(game) {
    super(game, "Howling Gale", "Odyssey", "ODY");
  }
}

module.exports = HowlingGale;
