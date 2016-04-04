"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IchoridBase = require("../setTOR/Ichorid.js");

class Ichorid extends IchoridBase {
  constructor(game) {
    super(game, "Ichorid", "Vintage Masters", "VMA");
  }
}

module.exports = Ichorid;
