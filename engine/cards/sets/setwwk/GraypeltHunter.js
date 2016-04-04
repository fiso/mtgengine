"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GraypeltHunterBase = require("../setDDP/GraypeltHunter.js");

class GraypeltHunter extends GraypeltHunterBase {
  constructor(game) {
    super(game, "Graypelt Hunter", "Worldwake", "WWK");
  }
}

module.exports = GraypeltHunter;
