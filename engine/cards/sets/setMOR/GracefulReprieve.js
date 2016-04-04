"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GracefulReprieve extends Card {
  constructor(game) {
    super(game, "Graceful Reprieve", "Morningtide", "MOR");
  }
}

module.exports = GracefulReprieve;
