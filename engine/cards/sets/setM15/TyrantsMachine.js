"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TyrantsMachine extends Card {
  constructor(game) {
    super(game, "Tyrant's Machine", "Magic 2015 Core Set", "M15");
  }
}

module.exports = TyrantsMachine;
