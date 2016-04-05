"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadDrop extends UnimplementedCard {
  constructor(game) {
    super(game, "Dead Drop", "Khans of Tarkir", "KTK");
  }
}

module.exports = DeadDrop;
