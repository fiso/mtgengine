"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KorHaven extends UnimplementedCard {
  constructor (game) {
    super(game, "Kor Haven", "Zendikar Expeditions", "EXP");
  }
}

module.exports = KorHaven;
