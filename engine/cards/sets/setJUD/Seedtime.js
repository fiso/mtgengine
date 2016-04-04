"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Seedtime extends Card {
  constructor(game) {
    super(game, "Seedtime", "Judgment", "JUD");
  }
}

module.exports = Seedtime;
