"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlisterBeetle extends UnimplementedCard {
  constructor(game) {
    super(game, "Blister Beetle", "Shards of Alara", "ALA");
  }
}

module.exports = BlisterBeetle;
