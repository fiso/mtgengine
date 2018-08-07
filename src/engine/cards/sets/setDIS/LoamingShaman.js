"use strict";
const Constants = require ("../../../Constants");
const LoamingShamanBase = require("../setC15/LoamingShaman");

class LoamingShaman extends LoamingShamanBase {
  constructor (game) {
    super(game, "Loaming Shaman", "Dissension", "DIS");
  }
}

module.exports = LoamingShaman;
