"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CommandoRaid extends UnimplementedCard {
  constructor (game) {
    super(game, "Commando Raid", "Onslaught", "ONS");
  }
}

module.exports = CommandoRaid;
