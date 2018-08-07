"use strict";
const Constants = require ("../../../Constants");
const LoxodonPartisanBase = require("../setDDO/LoxodonPartisan");

class LoxodonPartisan extends LoxodonPartisanBase {
  constructor (game) {
    super(game, "Loxodon Partisan", "Mirrodin Besieged", "MBS");
  }
}

module.exports = LoxodonPartisan;
