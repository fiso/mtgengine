"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneCatapult extends UnimplementedCard {
  constructor (game) {
    super(game, "Stone Catapult", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = StoneCatapult;
