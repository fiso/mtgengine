"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GracefulReprieve extends UnimplementedCard {
  constructor(game) {
    super(game, "Graceful Reprieve", "Morningtide", "MOR");
  }
}

module.exports = GracefulReprieve;
