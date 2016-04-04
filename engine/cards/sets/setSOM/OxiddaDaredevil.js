"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OxiddaDaredevil extends UnimplementedCard {
  constructor(game) {
    super(game, "Oxidda Daredevil", "Scars of Mirrodin", "SOM");
  }
}

module.exports = OxiddaDaredevil;
