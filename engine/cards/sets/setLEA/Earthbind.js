"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EarthbindBase = require("../setCED/Earthbind.js");

class Earthbind extends EarthbindBase {
  constructor(game) {
    super(game, "Earthbind", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Earthbind;
