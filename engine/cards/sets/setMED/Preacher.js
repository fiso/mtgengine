"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Preacher extends Card {
  constructor(game) {
    super(game, "Preacher", "Masters Edition", "MED");
  }
}

module.exports = Preacher;
