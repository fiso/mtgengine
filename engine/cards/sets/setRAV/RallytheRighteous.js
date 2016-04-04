"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RallytheRighteous extends Card {
  constructor(game) {
    super(game, "Rally the Righteous", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = RallytheRighteous;
