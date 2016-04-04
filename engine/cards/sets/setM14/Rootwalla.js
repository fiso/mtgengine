"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Rootwalla extends Card {
  constructor(game) {
    super(game, "Rootwalla", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Rootwalla;
