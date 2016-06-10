"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritMirror extends UnimplementedCard {
  constructor (game) {
    super(game, "Spirit Mirror", "Tempest", "TMP");
  }
}

module.exports = SpiritMirror;
