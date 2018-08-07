"use strict";
const Constants = require ("../../../Constants");
const CongregateBase = require("../setA25/Congregate");

class Congregate extends CongregateBase {
  constructor (game) {
    super(game, "Congregate", "Magic 2015", "M15");
  }
}

module.exports = Congregate;
