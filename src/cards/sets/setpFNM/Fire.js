"use strict";
const Constants = require ("../../../Constants");
const FireBase = require("../setAPC/Fire");

class Fire extends FireBase {
  constructor (game) {
    super(game, "Fire", "Friday Night Magic", "pFNM");
  }
}

module.exports = Fire;
