"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PharagaxGiant extends UnimplementedCard {
  constructor(game) {
    super(game, "Pharagax Giant", "Born of the Gods", "BNG");
  }
}

module.exports = PharagaxGiant;
