"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CanyonLurkers extends UnimplementedCard {
  constructor(game) {
    super(game, "Canyon Lurkers", "Khans of Tarkir", "KTK");
  }
}

module.exports = CanyonLurkers;
