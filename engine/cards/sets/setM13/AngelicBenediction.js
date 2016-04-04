"use strict";
const Constants = require ("../../../Constants");
const AngelicBenedictionBase = require("../setDD3_DVD/AngelicBenediction");

class AngelicBenediction extends AngelicBenedictionBase {
  constructor(game) {
    super(game, "Angelic Benediction", "Magic 2013", "M13");
  }
}

module.exports = AngelicBenediction;
