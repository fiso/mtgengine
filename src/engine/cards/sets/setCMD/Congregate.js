"use strict";
const Constants = require ("../../../Constants");
const CongregateBase = require("../setA25/Congregate");

class Congregate extends CongregateBase {
  constructor (game) {
    super(game, "Congregate", "Commander 2011", "CMD");
  }
}

module.exports = Congregate;
