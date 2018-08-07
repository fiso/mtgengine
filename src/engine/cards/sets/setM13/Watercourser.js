"use strict";
const Constants = require ("../../../Constants");
const WatercourserBase = require("../setBBD/Watercourser");

class Watercourser extends WatercourserBase {
  constructor (game) {
    super(game, "Watercourser", "Magic 2013", "M13");
  }
}

module.exports = Watercourser;
