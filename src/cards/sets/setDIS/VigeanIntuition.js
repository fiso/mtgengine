"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VigeanIntuition extends UnimplementedCard {
  constructor (game) {
    super(game, "Vigean Intuition", "Dissension", "DIS");
  }
}

module.exports = VigeanIntuition;
