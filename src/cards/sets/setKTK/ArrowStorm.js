"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArrowStorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Arrow Storm", "Khans of Tarkir", "KTK");
  }
}

module.exports = ArrowStorm;
