"use strict";
const Constants = require ("../../../Constants");
const KamiofOldStoneBase = require("../set9ED/KamiofOldStone");

class KamiofOldStone extends KamiofOldStoneBase {
  constructor (game) {
    super(game, "Kami of Old Stone", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KamiofOldStone;
