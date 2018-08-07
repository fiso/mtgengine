"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BodyDouble extends UnimplementedCard {
  constructor (game) {
    super(game, "Body Double", "Commander 2017", "C17");
  }
}

module.exports = BodyDouble;
