"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DwellonthePast extends Card {
  constructor(game) {
    super(game, "Dwell on the Past", "Torment", "TOR");
  }
}

module.exports = DwellonthePast;
