"use strict";
const Constants = require ("../../../Constants");
const MoroiiBase = require("../setDDH/Moroii");

class Moroii extends MoroiiBase {
  constructor (game) {
    super(game, "Moroii", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Moroii;
