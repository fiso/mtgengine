"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DruidoftheAnima extends UnimplementedCard {
  constructor(game) {
    super(game, "Druid of the Anima", "Shards of Alara", "ALA");
  }
}

module.exports = DruidoftheAnima;
