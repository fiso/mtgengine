"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Acquire extends UnimplementedCard {
  constructor (game) {
    super(game, "Acquire", "Fifth Dawn", "5DN");
  }
}

module.exports = Acquire;
