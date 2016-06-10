"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HanweirLancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Hanweir Lancer", "Avacyn Restored", "AVR");
  }
}

module.exports = HanweirLancer;
