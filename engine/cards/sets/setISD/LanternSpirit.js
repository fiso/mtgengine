"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LanternSpirit extends Card {
  constructor(game) {
    super(game, "Lantern Spirit", "Innistrad", "ISD");
  }
}

module.exports = LanternSpirit;
