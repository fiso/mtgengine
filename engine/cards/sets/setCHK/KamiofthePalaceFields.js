"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KamiofthePalaceFields extends Card {
  constructor(game) {
    super(game, "Kami of the Palace Fields", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KamiofthePalaceFields;
