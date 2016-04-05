"use strict";
const Constants = require ("../../../Constants");
const EbonyHorseBase = require("../setARN/EbonyHorse");

class EbonyHorse extends EbonyHorseBase {
  constructor(game) {
    super(game, "Ebony Horse", "Revised Edition", "3ED");
  }
}

module.exports = EbonyHorse;
