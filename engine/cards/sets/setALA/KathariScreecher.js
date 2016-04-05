"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KathariScreecher extends UnimplementedCard {
  constructor(game) {
    super(game, "Kathari Screecher", "Shards of Alara", "ALA");
  }
}

module.exports = KathariScreecher;
