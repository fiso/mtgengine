"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AphettoDredging extends Card {
  constructor(game) {
    super(game, "Aphetto Dredging", "Onslaught", "ONS");
  }
}

module.exports = AphettoDredging;
