"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FishliverOilBase = require("../setARN/FishliverOil.js");

class FishliverOil extends FishliverOilBase {
  constructor(game) {
    super(game, "Fishliver Oil", "Ninth Edition", "9ED");
  }
}

module.exports = FishliverOil;
