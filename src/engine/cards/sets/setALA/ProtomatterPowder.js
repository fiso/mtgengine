"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProtomatterPowder extends UnimplementedCard {
  constructor (game) {
    super(game, "Protomatter Powder", "Shards of Alara", "ALA");
  }
}

module.exports = ProtomatterPowder;
