"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PestilentKathari extends Card {
  constructor(game) {
    super(game, "Pestilent Kathari", "Conflux", "CON");
  }
}

module.exports = PestilentKathari;
