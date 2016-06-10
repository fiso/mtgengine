"use strict";
const Constants = require ("../../../Constants");
const VoidmageApprenticeBase = require("../setDD3_JVC/VoidmageApprentice");

class VoidmageApprentice extends VoidmageApprenticeBase {
  constructor (game) {
    super(game, "Voidmage Apprentice", "Legions", "LGN");
  }
}

module.exports = VoidmageApprentice;
