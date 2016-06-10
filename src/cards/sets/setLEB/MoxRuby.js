"use strict";
const Constants = require ("../../../Constants");
const MoxRubyBase = require("../setCED/MoxRuby");

class MoxRuby extends MoxRubyBase {
  constructor (game) {
    super(game, "Mox Ruby", "Limited Edition Beta", "LEB");
  }
}

module.exports = MoxRuby;
