"use strict";
const Constants = require ("../../../Constants");
const RockslideAmbushBase = require("../setME4/RockslideAmbush");

class RockslideAmbush extends RockslideAmbushBase {
  constructor(game) {
    super(game, "Rockslide Ambush", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = RockslideAmbush;
