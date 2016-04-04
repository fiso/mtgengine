"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UndeadMinotaur extends Card {
  constructor(game) {
    super(game, "Undead Minotaur", "Magic 2014 Core Set", "M14");
  }
}

module.exports = UndeadMinotaur;
