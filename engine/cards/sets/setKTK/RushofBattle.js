"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RushofBattle extends UnimplementedCard {
  constructor(game) {
    super(game, "Rush of Battle", "Khans of Tarkir", "KTK");
  }
}

module.exports = RushofBattle;
