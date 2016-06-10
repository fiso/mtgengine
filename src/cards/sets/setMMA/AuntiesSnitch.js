"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AuntiesSnitch extends UnimplementedCard {
  constructor (game) {
    super(game, "Auntie's Snitch", "Modern Masters", "MMA");
  }
}

module.exports = AuntiesSnitch;
