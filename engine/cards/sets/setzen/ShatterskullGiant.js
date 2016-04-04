"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShatterskullGiant extends Card {
  constructor(game) {
    super(game, "Shatterskull Giant", "Zendikar", "ZEN");
  }
}

module.exports = ShatterskullGiant;
