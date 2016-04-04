"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WingShards extends Card {
  constructor(game) {
    super(game, "Wing Shards", "Commander 2014", "C14");
  }
}

module.exports = WingShards;
