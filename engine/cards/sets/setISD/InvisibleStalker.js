"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InvisibleStalker extends Card {
  constructor(game) {
    super(game, "Invisible Stalker", "Innistrad", "ISD");
  }
}

module.exports = InvisibleStalker;
