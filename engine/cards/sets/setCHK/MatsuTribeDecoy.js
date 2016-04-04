"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MatsuTribeDecoy extends Card {
  constructor(game) {
    super(game, "Matsu-Tribe Decoy", "Champions of Kamigawa", "CHK");
  }
}

module.exports = MatsuTribeDecoy;
