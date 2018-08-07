"use strict";
const Constants = require ("../../../Constants");
const CaptainoftheMistsBase = require("../setDDQ/CaptainoftheMists");

class CaptainoftheMists extends CaptainoftheMistsBase {
  constructor (game) {
    super(game, "Captain of the Mists", "Avacyn Restored", "AVR");
  }
}

module.exports = CaptainoftheMists;
