"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoonringMirror extends Card {
  constructor(game) {
    super(game, "Moonring Mirror", "Champions of Kamigawa", "CHK");
  }
}

module.exports = MoonringMirror;
