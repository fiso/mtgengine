"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EvilTwin extends Card {
  constructor(game) {
    super(game, "Evil Twin", "Innistrad", "ISD");
  }
}

module.exports = EvilTwin;
