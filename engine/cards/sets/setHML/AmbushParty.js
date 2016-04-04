"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AmbushPartyBase = require("../set5ED/AmbushParty.js");

class AmbushParty extends AmbushPartyBase {
  constructor(game) {
    super(game, "Ambush Party", "Homelands", "HML");
  }
}

module.exports = AmbushParty;
