"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SacredGuide extends UnimplementedCard {
  constructor(game) {
    super(game, "Sacred Guide", "Tempest", "TMP");
  }
}

module.exports = SacredGuide;
