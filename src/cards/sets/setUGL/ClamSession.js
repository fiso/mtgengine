"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClamSession extends UnimplementedCard {
  constructor(game) {
    super(game, "Clam Session", "Unglued", "UGL");
  }
}

module.exports = ClamSession;
