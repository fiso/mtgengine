"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnstableShapeshifter extends UnimplementedCard {
  constructor(game) {
    super(game, "Unstable Shapeshifter", "Tempest", "TMP");
  }
}

module.exports = UnstableShapeshifter;
