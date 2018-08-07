"use strict";
const Constants = require ("../../../Constants");
const CongregateBase = require("../setA25/Congregate");

class Congregate extends CongregateBase {
  constructor (game) {
    super(game, "Congregate", "Magic 2014", "M14");
  }
}

module.exports = Congregate;
