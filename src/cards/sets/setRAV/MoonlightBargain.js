"use strict";
const Constants = require ("../../../Constants");
const MoonlightBargainBase = require("../setC18/MoonlightBargain");

class MoonlightBargain extends MoonlightBargainBase {
  constructor (game) {
    super(game, "Moonlight Bargain", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = MoonlightBargain;
