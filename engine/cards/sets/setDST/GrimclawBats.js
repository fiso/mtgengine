"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrimclawBats extends Card {
  constructor(game) {
    super(game, "Grimclaw Bats", "Darksteel", "DST");
  }
}

module.exports = GrimclawBats;
