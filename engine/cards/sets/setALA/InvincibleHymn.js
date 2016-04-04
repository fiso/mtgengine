"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InvincibleHymn extends Card {
  constructor(game) {
    super(game, "Invincible Hymn", "Shards of Alara", "ALA");
  }
}

module.exports = InvincibleHymn;
