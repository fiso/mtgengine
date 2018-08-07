"use strict";
const Constants = require ("../../../Constants");
const OketratheTrueBase = require("../setAKH/OketratheTrue");

class OketratheTrue extends OketratheTrueBase {
  constructor (game) {
    super(game, "Oketra the True", "Amonkhet Invocations", "MP2");
  }
}

module.exports = OketratheTrue;
