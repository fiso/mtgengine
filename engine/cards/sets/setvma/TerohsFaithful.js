"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TerohsFaithfulBase = require("../setTOR/TerohsFaithful.js");

class TerohsFaithful extends TerohsFaithfulBase {
  constructor(game) {
    super(game, "Teroh's Faithful", "Vintage Masters", "VMA");
  }
}

module.exports = TerohsFaithful;
