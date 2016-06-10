"use strict";
const Constants = require ("../../../Constants");
const EbonyHorseBase = require("../setARN/EbonyHorse");

class EbonyHorse extends EbonyHorseBase {
  constructor (game) {
    super(game, "Ebony Horse", "Fourth Edition", "4ED");
  }
}

module.exports = EbonyHorse;
