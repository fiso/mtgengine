"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KindlyStranger extends UnimplementedCard {
  constructor (game) {
    super(game, "Kindly Stranger", "Shadows over Innistrad", "SOI");
  }
}

module.exports = KindlyStranger;
