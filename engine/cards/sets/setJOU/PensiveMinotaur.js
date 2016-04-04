"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PensiveMinotaur extends Card {
  constructor(game) {
    super(game, "Pensive Minotaur", "Journey into Nyx", "JOU");
  }
}

module.exports = PensiveMinotaur;
