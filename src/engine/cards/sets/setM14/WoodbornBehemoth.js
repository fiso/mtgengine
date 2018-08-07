"use strict";
const Constants = require ("../../../Constants");
const WoodbornBehemothBase = require("../setE01/WoodbornBehemoth");

class WoodbornBehemoth extends WoodbornBehemothBase {
  constructor (game) {
    super(game, "Woodborn Behemoth", "Magic 2014", "M14");
  }
}

module.exports = WoodbornBehemoth;
