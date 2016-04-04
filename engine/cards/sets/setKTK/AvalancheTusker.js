"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvalancheTusker extends UnimplementedCard {
  constructor(game) {
    super(game, "Avalanche Tusker", "Khans of Tarkir", "KTK");
  }
}

module.exports = AvalancheTusker;
