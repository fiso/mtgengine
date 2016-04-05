"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OneofthePack extends UnimplementedCard {
  constructor(game) {
    super(game, "One of the Pack", "Shadows over Innistrad", "SOI");
  }
}

module.exports = OneofthePack;
