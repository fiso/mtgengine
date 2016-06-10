"use strict";
const Constants = require ("../../../Constants");
const RevenantBase = require("../setORI/Revenant");

class Revenant extends RevenantBase {
  constructor (game) {
    super(game, "Revenant", "Seventh Edition", "7ED");
  }
}

module.exports = Revenant;
