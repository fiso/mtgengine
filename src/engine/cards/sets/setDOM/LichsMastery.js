"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LichsMastery extends UnimplementedCard {
  constructor (game) {
    super(game, "Lich's Mastery", "Dominaria", "DOM");
  }
}

module.exports = LichsMastery;
