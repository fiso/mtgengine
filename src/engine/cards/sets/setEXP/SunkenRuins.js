"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunkenRuins extends UnimplementedCard {
  constructor (game) {
    super(game, "Sunken Ruins", "Zendikar Expeditions", "EXP");
  }
}

module.exports = SunkenRuins;
