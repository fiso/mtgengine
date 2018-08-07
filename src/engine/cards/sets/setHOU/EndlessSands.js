"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EndlessSands extends UnimplementedCard {
  constructor (game) {
    super(game, "Endless Sands", "Hour of Devastation", "HOU");
  }
}

module.exports = EndlessSands;
