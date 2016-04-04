"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EscapedShapeshifter extends UnimplementedCard {
  constructor(game) {
    super(game, "Escaped Shapeshifter", "Tempest", "TMP");
  }
}

module.exports = EscapedShapeshifter;
