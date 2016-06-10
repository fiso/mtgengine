"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThinkTwice extends UnimplementedCard {
  constructor (game) {
    super(game, "Think Twice", "Innistrad", "ISD");
  }
}

module.exports = ThinkTwice;
