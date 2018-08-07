"use strict";
const Constants = require ("../../../Constants");
const OnakkeCatacombBase = require("../setPCA/OnakkeCatacomb");

class OnakkeCatacomb extends OnakkeCatacombBase {
  constructor (game) {
    super(game, "Onakke Catacomb", "Planechase 2012", "PC2");
  }
}

module.exports = OnakkeCatacomb;
