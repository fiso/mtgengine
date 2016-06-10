"use strict";
const Constants = require ("../../../Constants");
const IncinerateBase = require("../setCST/Incinerate");

class Incinerate extends IncinerateBase {
  constructor (game) {
    super(game, "Incinerate", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Incinerate;
