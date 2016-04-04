"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JötunGrunt extends Card {
  constructor(game) {
    super(game, "Jötun Grunt", "Coldsnap", "CSP");
  }
}

module.exports = JötunGrunt;
