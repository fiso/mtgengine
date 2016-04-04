"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WillotheWisp extends Card {
  constructor(game) {
    super(game, "Will-o'-the-Wisp", "Collector's Edition", "CED");
  }
}

module.exports = WillotheWisp;
