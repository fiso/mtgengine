"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RakishHeir extends Card {
  constructor(game) {
    super(game, "Rakish Heir", "Innistrad", "ISD");
  }
}

module.exports = RakishHeir;
