"use strict";
const Constants = require ("../../../Constants");
const KamiofOldStoneBase = require("../setCHK/KamiofOldStone");

class KamiofOldStone extends KamiofOldStoneBase {
  constructor(game) {
    super(game, "Kami of Old Stone", "Ninth Edition", "9ED");
  }
}

module.exports = KamiofOldStone;
