"use strict";
const Constants = require ("../../../Constants");
const RithsCharmBase = require("../setDDE/RithsCharm");

class RithsCharm extends RithsCharmBase {
  constructor (game) {
    super(game, "Rith's Charm", "Planeshift", "PLS");
  }
}

module.exports = RithsCharm;
