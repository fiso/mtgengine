"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhantomGeneralBase = require("../setDDK/PhantomGeneral.js");

class PhantomGeneral extends PhantomGeneralBase {
  constructor(game) {
    super(game, "Phantom General", "Return to Ravnica", "RTR");
  }
}

module.exports = PhantomGeneral;
