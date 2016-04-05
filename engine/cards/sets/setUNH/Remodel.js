"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Remodel extends UnimplementedCard {
  constructor(game) {
    super(game, "Remodel", "Unhinged", "UNH");
  }
}

module.exports = Remodel;
