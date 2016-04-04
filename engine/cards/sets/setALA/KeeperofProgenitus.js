"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeeperofProgenitus extends UnimplementedCard {
  constructor(game) {
    super(game, "Keeper of Progenitus", "Shards of Alara", "ALA");
  }
}

module.exports = KeeperofProgenitus;
