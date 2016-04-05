"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RootOut extends UnimplementedCard {
  constructor(game) {
    super(game, "Root Out", "Shadows over Innistrad", "SOI");
  }
}

module.exports = RootOut;
