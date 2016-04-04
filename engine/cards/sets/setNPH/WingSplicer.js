"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WingSplicer extends Card {
  constructor(game) {
    super(game, "Wing Splicer", "New Phyrexia", "NPH");
  }
}

module.exports = WingSplicer;
