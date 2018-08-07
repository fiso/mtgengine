"use strict";
const Constants = require ("../../../Constants");
const FieldCreeperBase = require("../setM19/FieldCreeper");

class FieldCreeper extends FieldCreeperBase {
  constructor (game) {
    super(game, "Field Creeper", "Eldritch Moon", "EMN");
  }
}

module.exports = FieldCreeper;
