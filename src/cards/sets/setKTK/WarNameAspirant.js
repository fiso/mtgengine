"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarNameAspirant extends UnimplementedCard {
  constructor (game) {
    super(game, "War-Name Aspirant", "Khans of Tarkir", "KTK");
  }
}

module.exports = WarNameAspirant;
