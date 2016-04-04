"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AerialFormation extends UnimplementedCard {
  constructor(game) {
    super(game, "Aerial Formation", "Journey into Nyx", "JOU");
  }
}

module.exports = AerialFormation;
