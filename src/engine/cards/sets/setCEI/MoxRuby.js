"use strict";
const Constants = require ("../../../Constants");
const MoxRubyBase = require("../setVMA/MoxRuby");

class MoxRuby extends MoxRubyBase {
  constructor (game) {
    super(game, "Mox Ruby", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = MoxRuby;
