"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoralhelmCommander extends Card {
  constructor(game) {
    super(game, "Coralhelm Commander", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = CoralhelmCommander;
