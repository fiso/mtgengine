"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GriffinProtector extends Card {
  constructor(game) {
    super(game, "Griffin Protector", "Magic 2013", "M13");
  }
}

module.exports = GriffinProtector;
