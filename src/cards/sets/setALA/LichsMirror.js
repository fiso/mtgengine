"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LichsMirror extends UnimplementedCard {
  constructor (game) {
    super(game, "Lich's Mirror", "Shards of Alara", "ALA");
  }
}

module.exports = LichsMirror;
