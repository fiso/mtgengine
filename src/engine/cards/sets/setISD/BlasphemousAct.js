"use strict";
const Constants = require ("../../../Constants");
const BlasphemousActBase = require("../setC18/BlasphemousAct");

class BlasphemousAct extends BlasphemousActBase {
  constructor (game) {
    super(game, "Blasphemous Act", "Innistrad", "ISD");
  }
}

module.exports = BlasphemousAct;
