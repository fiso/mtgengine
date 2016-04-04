"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OpalCaryatid extends Card {
  constructor(game) {
    super(game, "Opal Caryatid", "Urza's Saga", "USG");
  }
}

module.exports = OpalCaryatid;
