"use strict";
const Constants = require ("../../../Constants");
const TerohsFaithfulBase = require("../setTOR/TerohsFaithful");

class TerohsFaithful extends TerohsFaithfulBase {
  constructor(game) {
    super(game, "Teroh's Faithful", "Vintage Masters", "VMA");
  }
}

module.exports = TerohsFaithful;
