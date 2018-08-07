"use strict";
const Constants = require ("../../../Constants");
const KismetBase = require("../setME4/Kismet");

class Kismet extends KismetBase {
  constructor (game) {
    super(game, "Kismet", "Fifth Edition", "5ED");
  }
}

module.exports = Kismet;
