"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GravePerilBase = require("../setC15/GravePeril.js");

class GravePeril extends GravePerilBase {
  constructor(game) {
    super(game, "Grave Peril", "Future Sight", "FUT");
  }
}

module.exports = GravePeril;
