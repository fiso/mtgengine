"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CapashenKnight extends Card {
  constructor(game) {
    super(game, "Capashen Knight", "Magic 2014 Core Set", "M14");
  }
}

module.exports = CapashenKnight;
