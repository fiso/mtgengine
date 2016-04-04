"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LoamingShamanBase = require("../setC15/LoamingShaman.js");

class LoamingShaman extends LoamingShamanBase {
  constructor(game) {
    super(game, "Loaming Shaman", "Dissension", "DIS");
  }
}

module.exports = LoamingShaman;
