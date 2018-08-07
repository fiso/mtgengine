"use strict";
const Constants = require ("../../../Constants");
const WrensRunVanquisherBase = require("../setEVG/WrensRunVanquisher");

class WrensRunVanquisher extends WrensRunVanquisherBase {
  constructor (game) {
    super(game, "Wren's Run Vanquisher", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = WrensRunVanquisher;
