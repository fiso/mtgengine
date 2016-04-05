"use strict";
const Constants = require ("../../../Constants");
const MoxRubyBase = require("../setCED/MoxRuby");

class MoxRuby extends MoxRubyBase {
  constructor(game) {
    super(game, "Mox Ruby", "Vintage Masters", "VMA");
  }
}

module.exports = MoxRuby;
