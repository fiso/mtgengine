"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SelflessCathar extends Card {
  constructor(game) {
    super(game, "Selfless Cathar", "Innistrad", "ISD");
  }
}

module.exports = SelflessCathar;
