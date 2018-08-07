"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScavengerGrounds extends UnimplementedCard {
  constructor (game) {
    super(game, "Scavenger Grounds", "Hour of Devastation", "HOU");
  }
}

module.exports = ScavengerGrounds;
