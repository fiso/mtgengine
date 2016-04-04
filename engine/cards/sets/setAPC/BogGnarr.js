"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BogGnarr extends Card {
  constructor(game) {
    super(game, "Bog Gnarr", "Apocalypse", "APC");
  }
}

module.exports = BogGnarr;
