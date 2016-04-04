"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JunkyoBell extends Card {
  constructor(game) {
    super(game, "Junkyo Bell", "Champions of Kamigawa", "CHK");
  }
}

module.exports = JunkyoBell;
