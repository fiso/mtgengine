"use strict";
const Constants = require ("../../../Constants");
const AngelicBenedictionBase = require("../setDD3_DVD/AngelicBenediction");

class AngelicBenediction extends AngelicBenedictionBase {
  constructor (game) {
    super(game, "Angelic Benediction", "Shards of Alara", "ALA");
  }
}

module.exports = AngelicBenediction;
