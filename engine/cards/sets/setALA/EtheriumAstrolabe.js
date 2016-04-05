"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EtheriumAstrolabe extends UnimplementedCard {
  constructor(game) {
    super(game, "Etherium Astrolabe", "Shards of Alara", "ALA");
  }
}

module.exports = EtheriumAstrolabe;
