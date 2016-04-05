"use strict";
const Constants = require ("../../../Constants");
const TwilightShepherdBase = require("../setC14/TwilightShepherd");

class TwilightShepherd extends TwilightShepherdBase {
  constructor(game) {
    super(game, "Twilight Shepherd", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = TwilightShepherd;
