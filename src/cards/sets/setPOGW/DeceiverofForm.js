"use strict";
const Constants = require ("../../../Constants");
const DeceiverofFormBase = require("../setOGW/DeceiverofForm");

class DeceiverofForm extends DeceiverofFormBase {
  constructor (game) {
    super(game, "Deceiver of Form", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = DeceiverofForm;
