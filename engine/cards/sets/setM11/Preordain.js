"use strict";
const Constants = require ("../../../Constants");
const PreordainBase = require("../setC15/Preordain");

class Preordain extends PreordainBase {
  constructor(game) {
    super(game, "Preordain", "Magic 2011", "M11");
  }
}

module.exports = Preordain;
