"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuaTuoHonoredPhysician extends UnimplementedCard {
  constructor (game) {
    super(game, "Hua Tuo, Honored Physician", "Commander 2013", "C13");
  }
}

module.exports = HuaTuoHonoredPhysician;
