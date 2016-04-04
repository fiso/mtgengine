"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AegisAngel extends Card {
  constructor(game) {
    super(game, "Aegis Angel", "Magic 2012", "M12");
  }
}

module.exports = AegisAngel;
