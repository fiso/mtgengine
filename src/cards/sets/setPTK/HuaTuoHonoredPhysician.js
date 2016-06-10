"use strict";
const Constants = require ("../../../Constants");
const HuaTuoHonoredPhysicianBase = require("../setC13/HuaTuoHonoredPhysician");

class HuaTuoHonoredPhysician extends HuaTuoHonoredPhysicianBase {
  constructor (game) {
    super(game, "Hua Tuo, Honored Physician", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = HuaTuoHonoredPhysician;
