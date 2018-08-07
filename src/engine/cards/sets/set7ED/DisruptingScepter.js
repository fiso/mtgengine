"use strict";
const Constants = require ("../../../Constants");
const DisruptingScepterBase = require("../set9ED/DisruptingScepter");

class DisruptingScepter extends DisruptingScepterBase {
  constructor (game) {
    super(game, "Disrupting Scepter", "Seventh Edition", "7ED");
  }
}

module.exports = DisruptingScepter;
