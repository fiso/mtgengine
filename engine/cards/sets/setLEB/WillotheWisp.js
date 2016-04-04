"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WillotheWispBase = require("../setCED/WillotheWisp.js");

class WillotheWisp extends WillotheWispBase {
  constructor(game) {
    super(game, "Will-o'-the-Wisp", "Limited Edition Beta", "LEB");
  }
}

module.exports = WillotheWisp;
