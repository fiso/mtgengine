"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Override extends UnimplementedCard {
  constructor(game) {
    super(game, "Override", "Mirrodin", "MRD");
  }
}

module.exports = Override;
