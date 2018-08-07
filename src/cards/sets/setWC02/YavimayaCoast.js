"use strict";
const Constants = require ("../../../Constants");
const YavimayaCoastBase = require("../setORI/YavimayaCoast");

class YavimayaCoast extends YavimayaCoastBase {
  constructor (game) {
    super(game, "Yavimaya Coast", "World Championship Decks 2002", "WC02");
  }
}

module.exports = YavimayaCoast;
