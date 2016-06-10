"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnowFortress extends UnimplementedCard {
  constructor (game) {
    super(game, "Snow Fortress", "Ice Age", "ICE");
  }
}

module.exports = SnowFortress;
