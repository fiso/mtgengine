"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NoDachi extends Card {
  constructor(game) {
    super(game, "No-Dachi", "Champions of Kamigawa", "CHK");
  }
}

module.exports = NoDachi;
