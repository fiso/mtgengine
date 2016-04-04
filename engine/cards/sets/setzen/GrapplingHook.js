"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrapplingHook extends Card {
  constructor(game) {
    super(game, "Grappling Hook", "Zendikar", "ZEN");
  }
}

module.exports = GrapplingHook;
