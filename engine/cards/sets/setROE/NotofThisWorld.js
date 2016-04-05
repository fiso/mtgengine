"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NotofThisWorld extends UnimplementedCard {
  constructor(game) {
    super(game, "Not of This World", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = NotofThisWorld;
