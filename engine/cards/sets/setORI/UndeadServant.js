"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UndeadServant extends Card {
  constructor(game) {
    super(game, "Undead Servant", "Magic Origins", "ORI");
  }
}

module.exports = UndeadServant;
