"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeftDuelist extends UnimplementedCard {
  constructor(game) {
    super(game, "Deft Duelist", "Shards of Alara", "ALA");
  }
}

module.exports = DeftDuelist;
