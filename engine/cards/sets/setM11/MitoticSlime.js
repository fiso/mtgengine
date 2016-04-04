"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MitoticSlime extends Card {
  constructor(game) {
    super(game, "Mitotic Slime", "Magic 2011", "M11");
  }
}

module.exports = MitoticSlime;
