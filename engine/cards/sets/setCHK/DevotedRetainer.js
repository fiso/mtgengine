"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DevotedRetainer extends Card {
  constructor(game) {
    super(game, "Devoted Retainer", "Champions of Kamigawa", "CHK");
  }
}

module.exports = DevotedRetainer;
