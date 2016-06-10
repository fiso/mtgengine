"use strict";
const Constants = require ("../../../Constants");
const IncinerateBase = require("../setCST/Incinerate");

class Incinerate extends IncinerateBase {
  constructor (game) {
    super(game, "Incinerate", "Magic 2012", "M12");
  }
}

module.exports = Incinerate;
