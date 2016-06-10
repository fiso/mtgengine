"use strict";
const Constants = require ("../../../Constants");
const WillotheWispBase = require("../setCED/WillotheWisp");

class WillotheWisp extends WillotheWispBase {
  constructor (game) {
    super(game, "Will-o'-the-Wisp", "Limited Edition Beta", "LEB");
  }
}

module.exports = WillotheWisp;
