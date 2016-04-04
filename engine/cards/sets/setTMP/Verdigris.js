"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Verdigris extends Card {
  constructor(game) {
    super(game, "Verdigris", "Tempest", "TMP");
  }
}

module.exports = Verdigris;
