"use strict";
const Constants = require ("../../../Constants");
const FishliverOilBase = require("../set9ED/FishliverOil");

class FishliverOil extends FishliverOilBase {
  constructor (game) {
    super(game, "Fishliver Oil", "Chronicles", "CHR");
  }
}

module.exports = FishliverOil;
