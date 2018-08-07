"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AwakentheBear extends UnimplementedCard {
  constructor (game) {
    super(game, "Awaken the Bear", "Khans of Tarkir", "KTK");
  }
}

module.exports = AwakentheBear;
