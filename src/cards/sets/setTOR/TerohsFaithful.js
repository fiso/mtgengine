"use strict";
const Constants = require ("../../../Constants");
const TerohsFaithfulBase = require("../setVMA/TerohsFaithful");

class TerohsFaithful extends TerohsFaithfulBase {
  constructor (game) {
    super(game, "Teroh's Faithful", "Torment", "TOR");
  }
}

module.exports = TerohsFaithful;
