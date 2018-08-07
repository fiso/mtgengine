"use strict";
const Constants = require ("../../../Constants");
const DepalaPilotExemplarBase = require("../setKLD/DepalaPilotExemplar");

class DepalaPilotExemplar extends DepalaPilotExemplarBase {
  constructor (game) {
    super(game, "Depala, Pilot Exemplar", "Kaladesh Promos", "PKLD");
  }
}

module.exports = DepalaPilotExemplar;
