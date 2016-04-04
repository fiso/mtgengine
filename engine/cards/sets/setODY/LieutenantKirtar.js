"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LieutenantKirtar extends Card {
  constructor(game) {
    super(game, "Lieutenant Kirtar", "Odyssey", "ODY");
  }
}

module.exports = LieutenantKirtar;
