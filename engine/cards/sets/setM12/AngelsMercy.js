"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelsMercyBase = require("../setAVR/AngelsMercy.js");

class AngelsMercy extends AngelsMercyBase {
  constructor(game) {
    super(game, "Angel's Mercy", "Magic 2012", "M12");
  }
}

module.exports = AngelsMercy;
