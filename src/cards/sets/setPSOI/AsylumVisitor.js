"use strict";
const Constants = require ("../../../Constants");
const AsylumVisitorBase = require("../setSOI/AsylumVisitor");

class AsylumVisitor extends AsylumVisitorBase {
  constructor (game) {
    super(game, "Asylum Visitor", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = AsylumVisitor;
