"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraniticTitan extends UnimplementedCard {
  constructor (game) {
    super(game, "Granitic Titan", "Hour of Devastation", "HOU");
  }
}

module.exports = GraniticTitan;
