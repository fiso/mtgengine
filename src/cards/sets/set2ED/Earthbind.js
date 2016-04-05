"use strict";
const Constants = require ("../../../Constants");
const EarthbindBase = require("../setCED/Earthbind");

class Earthbind extends EarthbindBase {
  constructor(game) {
    super(game, "Earthbind", "Unlimited Edition", "2ED");
  }
}

module.exports = Earthbind;
