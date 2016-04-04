"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RockslideAmbushBase = require("../setME4/RockslideAmbush.js");

class RockslideAmbush extends RockslideAmbushBase {
  constructor(game) {
    super(game, "Rockslide Ambush", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = RockslideAmbush;
