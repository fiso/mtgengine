"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NecrogenMists extends UnimplementedCard {
  constructor(game) {
    super(game, "Necrogen Mists", "Mirrodin", "MRD");
  }
}

module.exports = NecrogenMists;
