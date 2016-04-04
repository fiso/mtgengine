"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConsulsLieutenant extends Card {
  constructor(game) {
    super(game, "Consul's Lieutenant", "Magic Origins", "ORI");
  }
}

module.exports = ConsulsLieutenant;
