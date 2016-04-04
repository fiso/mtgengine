"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OhranViper extends Card {
  constructor(game) {
    super(game, "Ohran Viper", "Coldsnap", "CSP");
  }
}

module.exports = OhranViper;
