"use strict";
const Constants = require ("../../../Constants");
const CongregateBase = require("../setA25/Congregate");

class Congregate extends CongregateBase {
  constructor (game) {
    super(game, "Congregate", "Urza's Saga", "USG");
  }
}

module.exports = Congregate;
