"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PainfulMemoriesBase = require("../set6ED/PainfulMemories.js");

class PainfulMemories extends PainfulMemoriesBase {
  constructor(game) {
    super(game, "Painful Memories", "Mirage", "MIR");
  }
}

module.exports = PainfulMemories;
