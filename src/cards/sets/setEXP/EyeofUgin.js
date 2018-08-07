"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EyeofUgin extends UnimplementedCard {
  constructor (game) {
    super(game, "Eye of Ugin", "Zendikar Expeditions", "EXP");
  }
}

module.exports = EyeofUgin;
