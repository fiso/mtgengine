"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EbonyHorseBase = require("../setARN/EbonyHorse.js");

class EbonyHorse extends EbonyHorseBase {
  constructor(game) {
    super(game, "Ebony Horse", "Fourth Edition", "4ED");
  }
}

module.exports = EbonyHorse;
