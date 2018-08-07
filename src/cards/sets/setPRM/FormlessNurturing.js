"use strict";
const Constants = require ("../../../Constants");
const FormlessNurturingBase = require("../setFRF/FormlessNurturing");

class FormlessNurturing extends FormlessNurturingBase {
  constructor (game) {
    super(game, "Formless Nurturing", "Magic Online Promos", "PRM");
  }
}

module.exports = FormlessNurturing;
