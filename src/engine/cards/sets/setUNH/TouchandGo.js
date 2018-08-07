"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TouchandGo extends UnimplementedCard {
  constructor (game) {
    super(game, "Touch and Go", "Unhinged", "UNH");
  }
}

module.exports = TouchandGo;
