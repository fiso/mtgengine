"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Moonmist extends Card {
  constructor(game) {
    super(game, "Moonmist", "Innistrad", "ISD");
  }
}

module.exports = Moonmist;
