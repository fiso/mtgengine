"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gold extends UnimplementedCard {
  constructor (game) {
    super(game, "Gold", "Commander 2017 Tokens", "TC17");
  }
}

module.exports = Gold;
