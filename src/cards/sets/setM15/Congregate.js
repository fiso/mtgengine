"use strict";
const Constants = require ("../../../Constants");
const CongregateBase = require("../setM14/Congregate");

class Congregate extends CongregateBase {
  constructor (game) {
    super(game, "Congregate", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Congregate;
