"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HanweirLancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Hanweir Lancer", "Modern Masters 2017", "MM3");
  }
}

module.exports = HanweirLancer;
