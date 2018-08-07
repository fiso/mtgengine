"use strict";
const Constants = require ("../../../Constants");
const CowlProwlerBase = require("../setBBD/CowlProwler");

class CowlProwler extends CowlProwlerBase {
  constructor (game) {
    super(game, "Cowl Prowler", "Kaladesh", "KLD");
  }
}

module.exports = CowlProwler;
