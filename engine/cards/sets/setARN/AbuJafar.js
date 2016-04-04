"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AbuJafar extends Card {
  constructor(game) {
    super(game, "Abu Ja'far", "Arabian Nights", "ARN");
  }
}

module.exports = AbuJafar;
