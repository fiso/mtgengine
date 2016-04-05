"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PuresightMerrow extends UnimplementedCard {
  constructor(game) {
    super(game, "Puresight Merrow", "Shadowmoor", "SHM");
  }
}

module.exports = PuresightMerrow;
