"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrongholdConfessor extends UnimplementedCard {
  constructor (game) {
    super(game, "Stronghold Confessor", "Dominaria", "DOM");
  }
}

module.exports = StrongholdConfessor;
