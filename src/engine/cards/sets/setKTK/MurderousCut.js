"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MurderousCut extends UnimplementedCard {
  constructor (game) {
    super(game, "Murderous Cut", "Khans of Tarkir", "KTK");
  }
}

module.exports = MurderousCut;
