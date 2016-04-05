"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BribersPurse extends UnimplementedCard {
  constructor(game) {
    super(game, "Briber's Purse", "Khans of Tarkir", "KTK");
  }
}

module.exports = BribersPurse;
