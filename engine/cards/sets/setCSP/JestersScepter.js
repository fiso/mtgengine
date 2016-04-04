"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JestersScepter extends Card {
  constructor(game) {
    super(game, "Jester's Scepter", "Coldsnap", "CSP");
  }
}

module.exports = JestersScepter;
