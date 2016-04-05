"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Asphyxiate extends UnimplementedCard {
  constructor(game) {
    super(game, "Asphyxiate", "Born of the Gods", "BNG");
  }
}

module.exports = Asphyxiate;
