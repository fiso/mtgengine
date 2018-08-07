"use strict";
const Constants = require ("../../../Constants");
const WatercourserBase = require("../setBBD/Watercourser");

class Watercourser extends WatercourserBase {
  constructor (game) {
    super(game, "Watercourser", "Magic Origins", "ORI");
  }
}

module.exports = Watercourser;
