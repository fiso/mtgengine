"use strict";
const Constants = require ("../../../Constants");
const CongregateBase = require("../setM14/Congregate");

class Congregate extends CongregateBase {
  constructor(game) {
    super(game, "Congregate", "Urza's Saga", "USG");
  }
}

module.exports = Congregate;
