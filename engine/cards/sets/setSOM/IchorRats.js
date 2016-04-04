"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IchorRats extends Card {
  constructor(game) {
    super(game, "Ichor Rats", "Scars of Mirrodin", "SOM");
  }
}

module.exports = IchorRats;
