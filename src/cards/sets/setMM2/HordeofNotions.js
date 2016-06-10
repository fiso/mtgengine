"use strict";
const Constants = require ("../../../Constants");
const HordeofNotionsBase = require("../setLRW/HordeofNotions");

class HordeofNotions extends HordeofNotionsBase {
  constructor (game) {
    super(game, "Horde of Notions", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = HordeofNotions;
