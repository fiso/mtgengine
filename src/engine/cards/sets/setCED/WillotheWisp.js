"use strict";
const Constants = require ("../../../Constants");
const WillotheWispBase = require("../setA25/WillotheWisp");

class WillotheWisp extends WillotheWispBase {
  constructor (game) {
    super(game, "Will-o'-the-Wisp", "Collectors’ Edition", "CED");
  }
}

module.exports = WillotheWisp;
