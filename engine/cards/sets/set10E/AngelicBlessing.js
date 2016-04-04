"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelicBlessingBase = require("../setEXO/AngelicBlessing.js");

class AngelicBlessing extends AngelicBlessingBase {
  constructor(game) {
    super(game, "Angelic Blessing", "Tenth Edition", "10E");
  }
}

module.exports = AngelicBlessing;
