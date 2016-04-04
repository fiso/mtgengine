"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Monomania extends Card {
  constructor(game) {
    super(game, "Monomania", "Magic 2012", "M12");
  }
}

module.exports = Monomania;
