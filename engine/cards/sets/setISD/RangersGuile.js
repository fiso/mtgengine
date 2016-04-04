"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RangersGuile extends UnimplementedCard {
  constructor(game) {
    super(game, "Ranger's Guile", "Innistrad", "ISD");
  }
}

module.exports = RangersGuile;
