"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarrowShards extends UnimplementedCard {
  constructor (game) {
    super(game, "Marrow Shards", "New Phyrexia", "NPH");
  }
}

module.exports = MarrowShards;
