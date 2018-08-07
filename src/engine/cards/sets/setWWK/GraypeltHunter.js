"use strict";
const Constants = require ("../../../Constants");
const GraypeltHunterBase = require("../setDDP/GraypeltHunter");

class GraypeltHunter extends GraypeltHunterBase {
  constructor (game) {
    super(game, "Graypelt Hunter", "Worldwake", "WWK");
  }
}

module.exports = GraypeltHunter;
