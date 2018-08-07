"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SiegeMastodon extends UnimplementedCard {
  constructor (game) {
    super(game, "Siege Mastodon", "Magic 2014", "M14");
  }
}

module.exports = SiegeMastodon;
