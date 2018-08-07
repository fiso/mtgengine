"use strict";
const Constants = require ("../../../Constants");
const EarthbindBase = require("../setSUM/Earthbind");

class Earthbind extends EarthbindBase {
  constructor (game) {
    super(game, "Earthbind", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Earthbind;
