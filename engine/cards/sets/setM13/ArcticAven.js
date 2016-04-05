"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcticAven extends UnimplementedCard {
  constructor(game) {
    super(game, "Arctic Aven", "Magic 2013", "M13");
  }
}

module.exports = ArcticAven;
