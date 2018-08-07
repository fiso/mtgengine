"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GracefulReprieve extends UnimplementedCard {
  constructor (game) {
    super(game, "Graceful Reprieve", "Modern Masters 2017", "MM3");
  }
}

module.exports = GracefulReprieve;
