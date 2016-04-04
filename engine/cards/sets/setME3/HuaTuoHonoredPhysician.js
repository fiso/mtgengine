"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HuaTuoHonoredPhysicianBase = require("../setC13/HuaTuoHonoredPhysician.js");

class HuaTuoHonoredPhysician extends HuaTuoHonoredPhysicianBase {
  constructor(game) {
    super(game, "Hua Tuo, Honored Physician", "Masters Edition III", "ME3");
  }
}

module.exports = HuaTuoHonoredPhysician;
