"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WaketheDead extends Card {
  constructor(game) {
    super(game, "Wake the Dead", "Commander 2014", "C14");
  }
}

module.exports = WaketheDead;
