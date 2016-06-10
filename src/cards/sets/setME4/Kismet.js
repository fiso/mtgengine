"use strict";
const Constants = require ("../../../Constants");
const KismetBase = require("../set6ED/Kismet");

class Kismet extends KismetBase {
  constructor (game) {
    super(game, "Kismet", "Masters Edition IV", "ME4");
  }
}

module.exports = Kismet;
