"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RavenousTrap extends Card {
  constructor(game) {
    super(game, "Ravenous Trap", "Zendikar", "ZEN");
  }
}

module.exports = RavenousTrap;
