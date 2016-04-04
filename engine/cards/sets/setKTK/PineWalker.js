"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PineWalker extends UnimplementedCard {
  constructor(game) {
    super(game, "Pine Walker", "Khans of Tarkir", "KTK");
  }
}

module.exports = PineWalker;
