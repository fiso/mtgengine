"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SliverHive extends UnimplementedCard {
  constructor (game) {
    super(game, "Sliver Hive", "Magic 2015", "M15");
  }
}

module.exports = SliverHive;
