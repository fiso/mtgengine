"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShefetDunes extends UnimplementedCard {
  constructor (game) {
    super(game, "Shefet Dunes", "Hour of Devastation", "HOU");
  }
}

module.exports = ShefetDunes;
