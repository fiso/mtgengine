"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RollingTemblor extends Card {
  constructor(game) {
    super(game, "Rolling Temblor", "Innistrad", "ISD");
  }
}

module.exports = RollingTemblor;
