"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DroningBureaucrats extends Card {
  constructor(game) {
    super(game, "Droning Bureaucrats", "Guildpact", "GPT");
  }
}

module.exports = DroningBureaucrats;
