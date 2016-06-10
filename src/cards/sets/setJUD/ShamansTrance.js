"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShamansTrance extends UnimplementedCard {
  constructor (game) {
    super(game, "Shaman's Trance", "Judgment", "JUD");
  }
}

module.exports = ShamansTrance;
