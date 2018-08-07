"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CurseoftheNightlyHunt extends UnimplementedCard {
  constructor (game) {
    super(game, "Curse of the Nightly Hunt", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = CurseoftheNightlyHunt;
