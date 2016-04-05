"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmptythePits extends UnimplementedCard {
  constructor(game) {
    super(game, "Empty the Pits", "Khans of Tarkir", "KTK");
  }
}

module.exports = EmptythePits;
