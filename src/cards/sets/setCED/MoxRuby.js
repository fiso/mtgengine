"use strict";
const Constants = require ("../../../Constants");
const MoxRubyBase = require("../setVMA/MoxRuby");

class MoxRuby extends MoxRubyBase {
  constructor (game) {
    super(game, "Mox Ruby", "Collectors’ Edition", "CED");
  }
}

module.exports = MoxRuby;
