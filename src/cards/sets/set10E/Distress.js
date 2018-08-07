"use strict";
const Constants = require ("../../../Constants");
const DistressBase = require("../setM12/Distress");

class Distress extends DistressBase {
  constructor (game) {
    super(game, "Distress", "Tenth Edition", "10E");
  }
}

module.exports = Distress;
