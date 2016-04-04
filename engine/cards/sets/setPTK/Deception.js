"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Deception extends Card {
  constructor(game) {
    super(game, "Deception", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = Deception;
