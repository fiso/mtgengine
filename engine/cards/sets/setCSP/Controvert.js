"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Controvert extends Card {
  constructor(game) {
    super(game, "Controvert", "Coldsnap", "CSP");
  }
}

module.exports = Controvert;
