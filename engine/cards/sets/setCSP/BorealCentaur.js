"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BorealCentaur extends Card {
  constructor(game) {
    super(game, "Boreal Centaur", "Coldsnap", "CSP");
  }
}

module.exports = BorealCentaur;
