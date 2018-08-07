"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeveredConvulsions extends UnimplementedCard {
  constructor (game) {
    super(game, "Fevered Convulsions", "Tempest", "TMP");
  }
}

module.exports = FeveredConvulsions;
