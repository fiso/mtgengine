"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DoublingChant extends Card {
  constructor(game) {
    super(game, "Doubling Chant", "Magic 2012", "M12");
  }
}

module.exports = DoublingChant;
