"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AerialGuide extends UnimplementedCard {
  constructor (game) {
    super(game, "Aerial Guide", "Hour of Devastation", "HOU");
  }
}

module.exports = AerialGuide;
