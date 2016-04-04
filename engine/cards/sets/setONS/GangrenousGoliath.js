"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GangrenousGoliath extends Card {
  constructor(game) {
    super(game, "Gangrenous Goliath", "Onslaught", "ONS");
  }
}

module.exports = GangrenousGoliath;
