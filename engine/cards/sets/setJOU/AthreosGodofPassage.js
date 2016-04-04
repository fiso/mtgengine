"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AthreosGodofPassage extends Card {
  constructor(game) {
    super(game, "Athreos, God of Passage", "Journey into Nyx", "JOU");
  }
}

module.exports = AthreosGodofPassage;
