"use strict";
const Constants = require ("../../../Constants");
const KarooBase = require("../setC14/Karoo");

class Karoo extends KarooBase {
  constructor(game) {
    super(game, "Karoo", "Visions", "VIS");
  }
}

module.exports = Karoo;
