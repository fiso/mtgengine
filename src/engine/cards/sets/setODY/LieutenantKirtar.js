"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LieutenantKirtar extends UnimplementedCard {
  constructor (game) {
    super(game, "Lieutenant Kirtar", "Odyssey", "ODY");
  }
}

module.exports = LieutenantKirtar;
