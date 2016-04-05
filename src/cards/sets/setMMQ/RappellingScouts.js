"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RappellingScouts extends UnimplementedCard {
  constructor(game) {
    super(game, "Rappelling Scouts", "Mercadian Masques", "MMQ");
  }
}

module.exports = RappellingScouts;
