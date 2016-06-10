"use strict";
const Constants = require ("../../../Constants");
const DisruptingScepterBase = require("../set6ED/DisruptingScepter");

class DisruptingScepter extends DisruptingScepterBase {
  constructor (game) {
    super(game, "Disrupting Scepter", "Limited Edition Alpha", "LEA");
  }
}

module.exports = DisruptingScepter;
