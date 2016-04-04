"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CounseloftheSoratami extends Card {
  constructor(game) {
    super(game, "Counsel of the Soratami", "Champions of Kamigawa", "CHK");
  }
}

module.exports = CounseloftheSoratami;
