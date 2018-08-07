"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HostileDesert extends UnimplementedCard {
  constructor (game) {
    super(game, "Hostile Desert", "Hour of Devastation", "HOU");
  }
}

module.exports = HostileDesert;
