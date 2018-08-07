"use strict";
const Constants = require ("../../../Constants");
const EbonyHorseBase = require("../setME4/EbonyHorse");

class EbonyHorse extends EbonyHorseBase {
  constructor (game) {
    super(game, "Ebony Horse", "Revised Edition", "3ED");
  }
}

module.exports = EbonyHorse;
