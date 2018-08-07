"use strict";
const Constants = require ("../../../Constants");
const SuspensionFieldBase = require("../setF15/SuspensionField");

class SuspensionField extends SuspensionFieldBase {
  constructor (game) {
    super(game, "Suspension Field", "Khans of Tarkir", "KTK");
  }
}

module.exports = SuspensionField;
