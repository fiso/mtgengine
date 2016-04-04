"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TheFallen extends Card {
  constructor(game) {
    super(game, "The Fallen", "Chronicles", "CHR");
  }
}

module.exports = TheFallen;
