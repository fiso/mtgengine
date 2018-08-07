"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnowFortress extends UnimplementedCard {
  constructor (game) {
    super(game, "Snow Fortress", "Masters Edition II", "ME2");
  }
}

module.exports = SnowFortress;
