"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SupplantFormBase = require("../setFRF/SupplantForm.js");

class SupplantForm extends SupplantFormBase {
  constructor(game) {
    super(game, "Supplant Form", "Magic Game Day", "pMGD");
  }
}

module.exports = SupplantForm;
