"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reap extends UnimplementedCard {
  constructor (game) {
    super(game, "Reap", "Tempest", "TMP");
  }
}

module.exports = Reap;
