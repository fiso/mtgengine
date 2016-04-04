"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DesecratedEarth extends Card {
  constructor(game) {
    super(game, "Desecrated Earth", "Zendikar", "ZEN");
  }
}

module.exports = DesecratedEarth;
