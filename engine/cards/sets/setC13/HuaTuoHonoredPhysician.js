"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HuaTuoHonoredPhysician extends Card {
  constructor(game) {
    super(game, "Hua Tuo, Honored Physician", "Commander 2013 Edition", "C13");
  }
}

module.exports = HuaTuoHonoredPhysician;
