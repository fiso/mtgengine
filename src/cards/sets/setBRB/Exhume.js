"use strict";
const Constants = require ("../../../Constants");
const ExhumeBase = require("../setPD3/Exhume");

class Exhume extends ExhumeBase {
  constructor (game) {
    super(game, "Exhume", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Exhume;
