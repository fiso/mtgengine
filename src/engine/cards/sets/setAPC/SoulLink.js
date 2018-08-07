"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulLink extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Link", "Apocalypse", "APC");
  }
}

module.exports = SoulLink;
