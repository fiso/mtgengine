"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TormentedThoughts extends Card {
  constructor(game) {
    super(game, "Tormented Thoughts", "Journey into Nyx", "JOU");
  }
}

module.exports = TormentedThoughts;
