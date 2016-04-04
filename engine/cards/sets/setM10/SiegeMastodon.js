"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SiegeMastodon extends UnimplementedCard {
  constructor(game) {
    super(game, "Siege Mastodon", "Magic 2010", "M10");
  }
}

module.exports = SiegeMastodon;
