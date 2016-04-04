"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelicBlessingBase = require("../setEXO/AngelicBlessing.js");

class AngelicBlessing extends AngelicBlessingBase {
  constructor(game) {
    super(game, "Angelic Blessing", "Ninth Edition", "9ED");
  }
}

module.exports = AngelicBlessing;
