"use strict";
const Constants = require ("../../../Constants");
const FormlessNurturingBase = require("../setFRF/FormlessNurturing");

class FormlessNurturing extends FormlessNurturingBase {
  constructor (game) {
    super(game, "Formless Nurturing", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = FormlessNurturing;
