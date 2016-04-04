"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LoxodonPartisanBase = require("../setDDO/LoxodonPartisan.js");

class LoxodonPartisan extends LoxodonPartisanBase {
  constructor(game) {
    super(game, "Loxodon Partisan", "Mirrodin Besieged", "MBS");
  }
}

module.exports = LoxodonPartisan;
