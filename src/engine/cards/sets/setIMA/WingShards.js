"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WingShards extends UnimplementedCard {
  constructor (game) {
    super(game, "Wing Shards", "Iconic Masters", "IMA");
  }
}

module.exports = WingShards;
