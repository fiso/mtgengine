"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AquamorphEntityBase = require("../setDDN/AquamorphEntity.js");

class AquamorphEntity extends AquamorphEntityBase {
  constructor(game) {
    super(game, "Aquamorph Entity", "Planar Chaos", "PLC");
  }
}

module.exports = AquamorphEntity;
