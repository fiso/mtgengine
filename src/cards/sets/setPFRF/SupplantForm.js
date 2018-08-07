"use strict";
const Constants = require ("../../../Constants");
const SupplantFormBase = require("../setFRF/SupplantForm");

class SupplantForm extends SupplantFormBase {
  constructor (game) {
    super(game, "Supplant Form", "Fate Reforged Promos", "PFRF");
  }
}

module.exports = SupplantForm;
