"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MogissWarhound extends Card {
  constructor(game) {
    super(game, "Mogis's Warhound", "Journey into Nyx", "JOU");
  }
}

module.exports = MogissWarhound;
