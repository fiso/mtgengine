"use strict";
const Constants = require ("../../../Constants");
const EarthbindBase = require("../setCED/Earthbind");

class Earthbind extends EarthbindBase {
  constructor (game) {
    super(game, "Earthbind", "Limited Edition Beta", "LEB");
  }
}

module.exports = Earthbind;
