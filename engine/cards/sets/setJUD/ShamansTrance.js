"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShamansTrance extends Card {
  constructor(game) {
    super(game, "Shaman's Trance", "Judgment", "JUD");
  }
}

module.exports = ShamansTrance;
