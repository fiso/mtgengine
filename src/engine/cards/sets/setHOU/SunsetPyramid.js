"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunsetPyramid extends UnimplementedCard {
  constructor (game) {
    super(game, "Sunset Pyramid", "Hour of Devastation", "HOU");
  }
}

module.exports = SunsetPyramid;
