"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeholdtheBeyond extends UnimplementedCard {
  constructor(game) {
    super(game, "Behold the Beyond", "Shadows over Innistrad", "SOI");
  }
}

module.exports = BeholdtheBeyond;
