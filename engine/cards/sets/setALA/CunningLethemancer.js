"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CunningLethemancer extends UnimplementedCard {
  constructor(game) {
    super(game, "Cunning Lethemancer", "Shards of Alara", "ALA");
  }
}

module.exports = CunningLethemancer;
