"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LethalSting extends UnimplementedCard {
  constructor (game) {
    super(game, "Lethal Sting", "Hour of Devastation", "HOU");
  }
}

module.exports = LethalSting;
