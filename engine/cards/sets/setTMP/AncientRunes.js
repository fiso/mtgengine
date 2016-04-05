"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientRunes extends UnimplementedCard {
  constructor(game) {
    super(game, "Ancient Runes", "Tempest", "TMP");
  }
}

module.exports = AncientRunes;
