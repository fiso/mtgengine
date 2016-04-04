"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sturmgeist extends Card {
  constructor(game) {
    super(game, "Sturmgeist", "Innistrad", "ISD");
  }
}

module.exports = Sturmgeist;
