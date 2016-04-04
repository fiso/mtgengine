"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnnaturalSpeed extends Card {
  constructor(game) {
    super(game, "Unnatural Speed", "Champions of Kamigawa", "CHK");
  }
}

module.exports = UnnaturalSpeed;
