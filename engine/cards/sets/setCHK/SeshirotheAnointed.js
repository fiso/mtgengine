"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeshirotheAnointed extends Card {
  constructor(game) {
    super(game, "Seshiro the Anointed", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SeshirotheAnointed;
