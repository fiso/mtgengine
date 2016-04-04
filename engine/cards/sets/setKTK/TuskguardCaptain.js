"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TuskguardCaptain extends Card {
  constructor(game) {
    super(game, "Tuskguard Captain", "Khans of Tarkir", "KTK");
  }
}

module.exports = TuskguardCaptain;
