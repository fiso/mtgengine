"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Divination extends UnimplementedCard {
  constructor(game) {
    super(game, "Divination", "Born of the Gods", "BNG");
  }
}

module.exports = Divination;
