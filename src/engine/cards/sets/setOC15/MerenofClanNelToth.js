"use strict";
const Constants = require ("../../../Constants");
const MerenofClanNelTothBase = require("../setCMA/MerenofClanNelToth");

class MerenofClanNelToth extends MerenofClanNelTothBase {
  constructor (game) {
    super(game, "Meren of Clan Nel Toth", "Commander 2015 Oversized", "OC15");
  }
}

module.exports = MerenofClanNelToth;
