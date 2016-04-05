"use strict";
const Constants = require ("../../../Constants");
const FishliverOilBase = require("../setARN/FishliverOil");

class FishliverOil extends FishliverOilBase {
  constructor(game) {
    super(game, "Fishliver Oil", "Ninth Edition", "9ED");
  }
}

module.exports = FishliverOil;
