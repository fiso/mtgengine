"use strict";
const Constants = require ("../../../Constants");
const SupplantFormBase = require("../setFRF/SupplantForm");

class SupplantForm extends SupplantFormBase {
  constructor (game) {
    super(game, "Supplant Form", "Magic Online Promos", "PRM");
  }
}

module.exports = SupplantForm;
