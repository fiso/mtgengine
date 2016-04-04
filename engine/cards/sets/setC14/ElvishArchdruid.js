"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishArchdruid extends Card {
  constructor(game) {
    super(game, "Elvish Archdruid", "Commander 2014", "C14");
  }
}

module.exports = ElvishArchdruid;
