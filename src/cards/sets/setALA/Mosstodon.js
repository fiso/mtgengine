"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mosstodon extends UnimplementedCard {
  constructor (game) {
    super(game, "Mosstodon", "Shards of Alara", "ALA");
  }
}

module.exports = Mosstodon;
