"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Greatsword extends Card {
  constructor(game) {
    super(game, "Greatsword", "Magic 2012", "M12");
  }
}

module.exports = Greatsword;
