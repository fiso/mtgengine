"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodHound extends UnimplementedCard {
  constructor (game) {
    super(game, "Blood Hound", "Mercadian Masques", "MMQ");
  }
}

module.exports = BloodHound;
