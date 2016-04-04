"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoicAngel extends UnimplementedCard {
  constructor(game) {
    super(game, "Stoic Angel", "Shards of Alara", "ALA");
  }
}

module.exports = StoicAngel;
