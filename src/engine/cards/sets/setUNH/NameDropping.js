"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NameDropping extends UnimplementedCard {
  constructor (game) {
    super(game, "Name Dropping", "Unhinged", "UNH");
  }
}

module.exports = NameDropping;
