"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WillotheWisp extends UnimplementedCard {
  constructor(game) {
    super(game, "Will-o'-the-Wisp", "Collector's Edition", "CED");
  }
}

module.exports = WillotheWisp;
