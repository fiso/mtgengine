"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodOath extends UnimplementedCard {
  constructor(game) {
    super(game, "Blood Oath", "Mercadian Masques", "MMQ");
  }
}

module.exports = BloodOath;
