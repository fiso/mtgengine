"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InvincibleHymn extends UnimplementedCard {
  constructor (game) {
    super(game, "Invincible Hymn", "Shards of Alara", "ALA");
  }
}

module.exports = InvincibleHymn;
