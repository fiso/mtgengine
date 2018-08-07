"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrideSovereign extends UnimplementedCard {
  constructor (game) {
    super(game, "Pride Sovereign", "Hour of Devastation", "HOU");
  }
}

module.exports = PrideSovereign;
