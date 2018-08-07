"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DawnrayArcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Dawnray Archer", "Shards of Alara", "ALA");
  }
}

module.exports = DawnrayArcher;
