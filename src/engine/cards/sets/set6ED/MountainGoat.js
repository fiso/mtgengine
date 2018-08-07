"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MountainGoat extends UnimplementedCard {
  constructor (game) {
    super(game, "Mountain Goat", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MountainGoat;
