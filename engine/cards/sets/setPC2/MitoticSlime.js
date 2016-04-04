"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MitoticSlimeBase = require("../setM11/MitoticSlime.js");

class MitoticSlime extends MitoticSlimeBase {
  constructor(game) {
    super(game, "Mitotic Slime", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = MitoticSlime;
