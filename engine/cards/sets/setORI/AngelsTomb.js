"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelsTombBase = require("../setAVR/AngelsTomb.js");

class AngelsTomb extends AngelsTombBase {
  constructor(game) {
    super(game, "Angel's Tomb", "Magic Origins", "ORI");
  }
}

module.exports = AngelsTomb;
