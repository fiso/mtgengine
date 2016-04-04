"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DruidoftheAnima extends Card {
  constructor(game) {
    super(game, "Druid of the Anima", "Shards of Alara", "ALA");
  }
}

module.exports = DruidoftheAnima;
