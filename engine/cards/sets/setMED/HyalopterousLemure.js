"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HyalopterousLemureBase = require("../setICE/HyalopterousLemure.js");

class HyalopterousLemure extends HyalopterousLemureBase {
  constructor(game) {
    super(game, "Hyalopterous Lemure", "Masters Edition", "MED");
  }
}

module.exports = HyalopterousLemure;
