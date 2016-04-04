"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JwariScuttler extends Card {
  constructor(game) {
    super(game, "Jwari Scuttler", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = JwariScuttler;
