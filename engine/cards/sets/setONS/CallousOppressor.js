"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CallousOppressor extends Card {
  constructor(game) {
    super(game, "Callous Oppressor", "Onslaught", "ONS");
  }
}

module.exports = CallousOppressor;
