"use strict";
const Constants = require ("../../../Constants");
const KismetBase = require("../set6ED/Kismet");

class Kismet extends KismetBase {
  constructor (game) {
    super(game, "Kismet", "Legends", "LEG");
  }
}

module.exports = Kismet;
