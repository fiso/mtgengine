"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AugurilVec extends UnimplementedCard {
  constructor(game) {
    super(game, "Augur il-Vec", "Future Sight", "FUT");
  }
}

module.exports = AugurilVec;
