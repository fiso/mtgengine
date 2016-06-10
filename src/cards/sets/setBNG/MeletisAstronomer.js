"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MeletisAstronomer extends UnimplementedCard {
  constructor (game) {
    super(game, "Meletis Astronomer", "Born of the Gods", "BNG");
  }
}

module.exports = MeletisAstronomer;
