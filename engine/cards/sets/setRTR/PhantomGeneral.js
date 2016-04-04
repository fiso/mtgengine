"use strict";
const Constants = require ("../../../Constants");
const PhantomGeneralBase = require("../setDDK/PhantomGeneral");

class PhantomGeneral extends PhantomGeneralBase {
  constructor(game) {
    super(game, "Phantom General", "Return to Ravnica", "RTR");
  }
}

module.exports = PhantomGeneral;
