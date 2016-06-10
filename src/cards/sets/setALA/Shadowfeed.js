"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shadowfeed extends UnimplementedCard {
  constructor (game) {
    super(game, "Shadowfeed", "Shards of Alara", "ALA");
  }
}

module.exports = Shadowfeed;
