"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Titania extends Card {
  constructor(game) {
    super(game, "Titania", "Vanguard", "VAN");
  }
}

module.exports = Titania;
