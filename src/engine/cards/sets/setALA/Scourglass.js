"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scourglass extends UnimplementedCard {
  constructor (game) {
    super(game, "Scourglass", "Shards of Alara", "ALA");
  }
}

module.exports = Scourglass;
