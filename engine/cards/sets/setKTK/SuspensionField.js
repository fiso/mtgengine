"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SuspensionFieldBase = require("../setpFNM/SuspensionField.js");

class SuspensionField extends SuspensionFieldBase {
  constructor(game) {
    super(game, "Suspension Field", "Khans of Tarkir", "KTK");
  }
}

module.exports = SuspensionField;
