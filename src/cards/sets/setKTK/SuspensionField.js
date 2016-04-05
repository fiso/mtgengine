"use strict";
const Constants = require ("../../../Constants");
const SuspensionFieldBase = require("../setpFNM/SuspensionField");

class SuspensionField extends SuspensionFieldBase {
  constructor(game) {
    super(game, "Suspension Field", "Khans of Tarkir", "KTK");
  }
}

module.exports = SuspensionField;
