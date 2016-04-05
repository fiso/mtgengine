"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EsperCharm extends UnimplementedCard {
  constructor(game) {
    super(game, "Esper Charm", "Shards of Alara", "ALA");
  }
}

module.exports = EsperCharm;
