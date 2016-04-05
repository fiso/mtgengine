"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CripplingBlight extends UnimplementedCard {
  constructor(game) {
    super(game, "Crippling Blight", "Magic 2013", "M13");
  }
}

module.exports = CripplingBlight;
