"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CaravanVigil extends UnimplementedCard {
  constructor (game) {
    super(game, "Caravan Vigil", "Innistrad", "ISD");
  }
}

module.exports = CaravanVigil;
