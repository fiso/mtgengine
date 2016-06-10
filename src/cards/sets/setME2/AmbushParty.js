"use strict";
const Constants = require ("../../../Constants");
const AmbushPartyBase = require("../set5ED/AmbushParty");

class AmbushParty extends AmbushPartyBase {
  constructor (game) {
    super(game, "Ambush Party", "Masters Edition II", "ME2");
  }
}

module.exports = AmbushParty;
