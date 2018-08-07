"use strict";
const Constants = require ("../../../Constants");
const AnafenzatheForemostBase = require("../setKTK/AnafenzatheForemost");

class AnafenzatheForemost extends AnafenzatheForemostBase {
  constructor (game) {
    super(game, "Anafenza, the Foremost", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = AnafenzatheForemost;
