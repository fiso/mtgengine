"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonGrip extends UnimplementedCard {
  constructor(game) {
    super(game, "Dragon Grip", "Khans of Tarkir", "KTK");
  }
}

module.exports = DragonGrip;
