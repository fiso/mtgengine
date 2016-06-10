"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WingShards extends UnimplementedCard {
  constructor (game) {
    super(game, "Wing Shards", "Commander 2014", "C14");
  }
}

module.exports = WingShards;
