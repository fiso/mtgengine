"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnraveltheAether extends UnimplementedCard {
  constructor(game) {
    super(game, "Unravel the Æther", "Born of the Gods", "BNG");
  }
}

module.exports = UnraveltheAether;
