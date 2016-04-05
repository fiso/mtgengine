"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PromisedKannushi extends UnimplementedCard {
  constructor(game) {
    super(game, "Promised Kannushi", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = PromisedKannushi;
