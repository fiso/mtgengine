"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChildofGaea extends UnimplementedCard {
  constructor (game) {
    super(game, "Child of Gaea", "Urza's Saga", "USG");
  }
}

module.exports = ChildofGaea;
