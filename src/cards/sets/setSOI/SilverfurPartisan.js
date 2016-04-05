"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilverfurPartisan extends UnimplementedCard {
  constructor(game) {
    super(game, "Silverfur Partisan", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SilverfurPartisan;
