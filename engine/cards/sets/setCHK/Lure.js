"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Lure extends Card {
  constructor(game) {
    super(game, "Lure", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Lure;
