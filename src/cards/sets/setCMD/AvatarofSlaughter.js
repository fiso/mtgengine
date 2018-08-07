"use strict";
const Constants = require ("../../../Constants");
const AvatarofSlaughterBase = require("../setCMA/AvatarofSlaughter");

class AvatarofSlaughter extends AvatarofSlaughterBase {
  constructor (game) {
    super(game, "Avatar of Slaughter", "Commander 2011", "CMD");
  }
}

module.exports = AvatarofSlaughter;
