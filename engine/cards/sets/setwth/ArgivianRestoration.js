"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArgivianRestorationBase = require("../setDDF/ArgivianRestoration.js");

class ArgivianRestoration extends ArgivianRestorationBase {
  constructor(game) {
    super(game, "Argivian Restoration", "Weatherlight", "WTH");
  }
}

module.exports = ArgivianRestoration;
