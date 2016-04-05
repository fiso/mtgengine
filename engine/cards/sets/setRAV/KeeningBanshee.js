"use strict";
const Constants = require ("../../../Constants");
const KeeningBansheeBase = require("../setDD3_GVL/KeeningBanshee");

class KeeningBanshee extends KeeningBansheeBase {
  constructor(game) {
    super(game, "Keening Banshee", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = KeeningBanshee;
