"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Reverence extends Card {
  constructor(game) {
    super(game, "Reverence", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = Reverence;
