"use strict";
const Constants = require ("../../../Constants");
const MoxRubyBase = require("../setVMA/MoxRuby");

class MoxRuby extends MoxRubyBase {
  constructor (game) {
    super(game, "Mox Ruby", "Magic Online Promos", "PRM");
  }
}

module.exports = MoxRuby;
