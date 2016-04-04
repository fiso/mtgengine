"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CommandoRaid extends Card {
  constructor(game) {
    super(game, "Commando Raid", "Onslaught", "ONS");
  }
}

module.exports = CommandoRaid;
