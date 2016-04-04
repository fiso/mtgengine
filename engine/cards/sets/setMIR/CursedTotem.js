"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CursedTotemBase = require("../set6ED/CursedTotem.js");

class CursedTotem extends CursedTotemBase {
  constructor(game) {
    super(game, "Cursed Totem", "Mirage", "MIR");
  }
}

module.exports = CursedTotem;
