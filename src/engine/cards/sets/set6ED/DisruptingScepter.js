"use strict";
const Constants = require ("../../../Constants");
const DisruptingScepterBase = require("../set9ED/DisruptingScepter");

class DisruptingScepter extends DisruptingScepterBase {
  constructor (game) {
    super(game, "Disrupting Scepter", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DisruptingScepter;
