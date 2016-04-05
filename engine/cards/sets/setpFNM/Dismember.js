"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dismember extends UnimplementedCard {
  constructor(game) {
    super(game, "Dismember", "Friday Night Magic", "pFNM");
  }
}

module.exports = Dismember;
