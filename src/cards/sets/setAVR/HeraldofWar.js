"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeraldofWar extends UnimplementedCard {
  constructor(game) {
    super(game, "Herald of War", "Avacyn Restored", "AVR");
  }
}

module.exports = HeraldofWar;
