"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Moroii extends UnimplementedCard {
  constructor (game) {
    super(game, "Moroii", "Modern Masters 2017", "MM3");
  }
}

module.exports = Moroii;
