"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HandofEmrakul extends UnimplementedCard {
  constructor (game) {
    super(game, "Hand of Emrakul", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = HandofEmrakul;
