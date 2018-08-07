"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SandStrangler extends UnimplementedCard {
  constructor (game) {
    super(game, "Sand Strangler", "Hour of Devastation", "HOU");
  }
}

module.exports = SandStrangler;
