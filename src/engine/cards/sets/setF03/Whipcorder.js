"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Whipcorder extends UnimplementedCard {
  constructor (game) {
    super(game, "Whipcorder", "Friday Night Magic 2003", "F03");
  }
}

module.exports = Whipcorder;
