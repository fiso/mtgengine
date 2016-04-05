"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorpseDance extends UnimplementedCard {
  constructor(game) {
    super(game, "Corpse Dance", "Tempest", "TMP");
  }
}

module.exports = CorpseDance;
