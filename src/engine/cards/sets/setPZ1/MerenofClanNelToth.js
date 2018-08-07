"use strict";
const Constants = require ("../../../Constants");
const MerenofClanNelTothBase = require("../setCMA/MerenofClanNelToth");

class MerenofClanNelToth extends MerenofClanNelTothBase {
  constructor (game) {
    super(game, "Meren of Clan Nel Toth", "Legendary Cube", "PZ1");
  }
}

module.exports = MerenofClanNelToth;
