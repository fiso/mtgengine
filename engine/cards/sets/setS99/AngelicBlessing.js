"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelicBlessingBase = require("../setEXO/AngelicBlessing.js");

class AngelicBlessing extends AngelicBlessingBase {
  constructor(game) {
    super(game, "Angelic Blessing", "Starter 1999", "S99");
  }
}

module.exports = AngelicBlessing;
