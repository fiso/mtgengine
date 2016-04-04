"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IndomitableArchangelBase = require("../setMM2/IndomitableArchangel.js");

class IndomitableArchangel extends IndomitableArchangelBase {
  constructor(game) {
    super(game, "Indomitable Archangel", "Scars of Mirrodin", "SOM");
  }
}

module.exports = IndomitableArchangel;
