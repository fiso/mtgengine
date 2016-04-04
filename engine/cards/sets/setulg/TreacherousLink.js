"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TreacherousLink extends Card {
  constructor(game) {
    super(game, "Treacherous Link", "Urza's Legacy", "ULG");
  }
}

module.exports = TreacherousLink;
