"use strict";
const Constants = require ("../../../Constants");
const KeeningBansheeBase = require("../setGVL/KeeningBanshee");

class KeeningBanshee extends KeeningBansheeBase {
  constructor (game) {
    super(game, "Keening Banshee", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = KeeningBanshee;
