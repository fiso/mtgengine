"use strict";
const Constants = require ("../../../Constants");
const MoxRubyBase = require("../setVMA/MoxRuby");

class MoxRuby extends MoxRubyBase {
  constructor (game) {
    super(game, "Mox Ruby", "Limited Edition Alpha", "LEA");
  }
}

module.exports = MoxRuby;
