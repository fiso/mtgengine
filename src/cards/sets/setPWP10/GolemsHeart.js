"use strict";
const Constants = require ("../../../Constants");
const GolemsHeartBase = require("../setSOM/GolemsHeart");

class GolemsHeart extends GolemsHeartBase {
  constructor (game) {
    super(game, "Golem's Heart", "Wizards Play Network 2010", "PWP10");
  }
}

module.exports = GolemsHeart;
