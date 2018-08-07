"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BileBlight extends UnimplementedCard {
  constructor (game) {
    super(game, "Bile Blight", "Born of the Gods", "BNG");
  }
}

module.exports = BileBlight;
