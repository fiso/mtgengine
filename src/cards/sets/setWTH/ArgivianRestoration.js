"use strict";
const Constants = require ("../../../Constants");
const ArgivianRestorationBase = require("../setDDF/ArgivianRestoration");

class ArgivianRestoration extends ArgivianRestorationBase {
  constructor (game) {
    super(game, "Argivian Restoration", "Weatherlight", "WTH");
  }
}

module.exports = ArgivianRestoration;
