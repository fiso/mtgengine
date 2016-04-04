"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarBehemoth extends Card {
  constructor(game) {
    super(game, "War Behemoth", "Khans of Tarkir", "KTK");
  }
}

module.exports = WarBehemoth;
