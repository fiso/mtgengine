"use strict";
const Constants = require ("../../../Constants");
const MercurialPretenderBase = require("../setM15/MercurialPretender");

class MercurialPretender extends MercurialPretenderBase {
  constructor (game) {
    super(game, "Mercurial Pretender", "Magic 2015 Promos", "PM15");
  }
}

module.exports = MercurialPretender;
