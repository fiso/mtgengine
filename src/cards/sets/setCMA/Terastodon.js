"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Terastodon extends UnimplementedCard {
  constructor (game) {
    super(game, "Terastodon", "Commander Anthology", "CMA");
  }
}

module.exports = Terastodon;
