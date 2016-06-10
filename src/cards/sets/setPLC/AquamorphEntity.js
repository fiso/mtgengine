"use strict";
const Constants = require ("../../../Constants");
const AquamorphEntityBase = require("../setDDN/AquamorphEntity");

class AquamorphEntity extends AquamorphEntityBase {
  constructor (game) {
    super(game, "Aquamorph Entity", "Planar Chaos", "PLC");
  }
}

module.exports = AquamorphEntity;
