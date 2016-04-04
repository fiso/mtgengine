"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AeonChroniclerBase = require("../setDDM/AeonChronicler.js");

class AeonChronicler extends AeonChroniclerBase {
  constructor(game) {
    super(game, "Aeon Chronicler", "Planar Chaos", "PLC");
  }
}

module.exports = AeonChronicler;
