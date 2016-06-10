"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BogGnarr extends UnimplementedCard {
  constructor (game) {
    super(game, "Bog Gnarr", "Apocalypse", "APC");
  }
}

module.exports = BogGnarr;
