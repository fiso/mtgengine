"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DromadPurebred extends Card {
  constructor(game) {
    super(game, "Dromad Purebred", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DromadPurebred;
