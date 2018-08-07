"use strict";
const Constants = require ("../../../Constants");
const SunhomeFortressoftheLegionBase = require("../setHOP/SunhomeFortressoftheLegion");

class SunhomeFortressoftheLegion extends SunhomeFortressoftheLegionBase {
  constructor (game) {
    super(game, "Sunhome, Fortress of the Legion", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SunhomeFortressoftheLegion;
